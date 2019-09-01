using MeetingAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingAPI.Dtos
{
    public class MeetingDetailsDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime TimeStart { get; set; }
        public DateTime TimeEnd { get; set; }
        public Room Room { get; set; }
        public UserDto User { get; set; }
        public List<AttenderDetailsDto> Attenders { get; set; }
    }
}
