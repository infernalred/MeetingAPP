using MeetingAPI.Data;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using MeetingAPI.Models;

namespace MeetingAPI.Helpers
{
    public class UpdateAttenders : IAsyncActionFilter
    {
        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            var resultContext = await next();
            var repo = resultContext.HttpContext.RequestServices.GetService<IMeetingRepository>();
            //var user = await repo.GetMeeting(userId);
        }
    }
}
