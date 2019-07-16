using MeetingAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {}

        public DbSet<User> Users { get; set; }
        public DbSet<Meeting> Meetings { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<Attender> Attenders { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<MeetingsAttenders>()
                .HasKey(t => new { t.MeetingId, t.AttenderId });

            modelBuilder.Entity<MeetingsAttenders>()
                .HasOne(sc => sc.Meeting)
                .WithMany(s => s.MeetingsAttenders)
                .HasForeignKey(sc => sc.MeetingId);

            modelBuilder.Entity<MeetingsAttenders>()
                .HasOne(sc => sc.Attender)
                .WithMany(c => c.MeetingsAttenders)
                .HasForeignKey(sc => sc.AttenderId);

        }
    }
}
