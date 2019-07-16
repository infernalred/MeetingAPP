using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingAPI.Models
{
    public class Attender
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public List<MeetingsAttenders> MeetingsAttenders { get; set; }

        public Attender()
        {
            MeetingsAttenders = new List<MeetingsAttenders>();
        }
    }
}
