using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MeetingAPI.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;

namespace MeetingAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            string dbString = Configuration.GetConnectionString("SQLExpress");
            string typeAuth = Configuration.GetSection("Setting:TypeAuth").Value;
            services.AddDbContext<DataContext>(options => options.UseSqlServer(dbString));
            services.AddControllers();
            services.AddMvc(options => options.EnableEndpointRouting = false);
            services.AddCors();
            
            //services.AddTransient<IAuthRepository>(provider =>
            //{
            //    if (Configuration.GetConnectionString("TypeAuth") == "Domain") return new AuthRepositoryAD();
            //    else return new AuthRepositoryAD();
            //});
            if (dbString == "DB")
            {
                services.AddScoped<IAuthRepository, AuthRepositoryDB>();
            }
            else if (dbString == "Domain")
            {
                services.AddScoped<IAuthRepository, AuthRepositoryAD>();
            }
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            app.UseMvc();

            //app.UseRouting();

            //app.UseAuthorization();

            //app.UseEndpoints(endpoints =>
            //{
            //    endpoints.MapControllers();
            //});
        }
    }
}
