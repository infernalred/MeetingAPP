using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingAPI.Models
{
    public class Meeting
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public int RoomId { get; set; }
        public Room Room { get; set; }
        public string UserId { get; set; }
        public User User { get; set; }
        public List<MeetingsAttenders> MeetingsAttenders { get; set; }

        public Meeting()
        {
            MeetingsAttenders = new List<MeetingsAttenders>();
        }
    }
}
