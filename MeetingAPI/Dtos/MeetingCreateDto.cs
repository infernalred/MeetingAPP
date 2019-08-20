using MeetingAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingAPI.Dtos
{
    public class MeetingCreateDto
    {
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public DateTime TimeStart { get; set; }
        public DateTime TimeEnd { get; set; }
        public Room Room { get; set; }
        public int ResourceId { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
        public string[] MeetingsAttenders { get; set; }

    }
}
