using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingAPI.Models
{
    public class MeetingsAttenders
    {
        public int MeetingId { get; set; }
        public Meeting Meeting { get; set; }


        public int AttenderId { get; set; }
        public Attender Attender { get; set; }
    }
}
