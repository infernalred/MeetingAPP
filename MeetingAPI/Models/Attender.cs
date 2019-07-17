using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingAPI.Models
{
    public class Attender
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        public List<MeetingsAttenders> MeetingsAttenders { get; set; }

        public Attender()
        {
            MeetingsAttenders = new List<MeetingsAttenders>();
        }
    }
}
