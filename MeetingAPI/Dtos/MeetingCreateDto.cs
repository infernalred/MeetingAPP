using MeetingAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingAPI.Dtos
{
    public class MeetingCreateDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public DateTime TimeStart { get; set; }
        public DateTime TimeEnd { get; set; }
        public int RoomId { get; set; }
        public string UserId { get; set; }
        public List<Attender> Attenders { get; set; }


    }
}
