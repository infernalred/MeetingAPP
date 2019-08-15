using MeetingAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingAPI.Dtos
{
    public class MeetingEditDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public TimeSpan TimeStart { get; set; }
        public TimeSpan TimeEnd { get; set; }
        public Room Room { get; set; }
        public int RoomId { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
        public string[] MeetingsAttenders { get; set; }
    }
}
