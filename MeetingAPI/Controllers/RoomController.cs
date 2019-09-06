using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MeetingAPI.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MeetingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoomController : ControllerBase
    {
        private readonly IRoomRepository _repo;

        public RoomController(IRoomRepository repo)
        {
            _repo = repo;
        }

        public async Task<IActionResult> GetRooms()
        {
            var rooms = await _repo.GetRooms();
            return Ok(rooms);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAttender(int id)
        {
            var room = await _repo.GetRoom(id);
            return Ok(room);
        }
    }
}