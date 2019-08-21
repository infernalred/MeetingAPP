using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MeetingAPI.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MeetingAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AttenderController : ControllerBase
    {
        private readonly IAttenderRepository _repo;

        public AttenderController(IAttenderRepository repo)
        {
            _repo = repo;
        }

        public async Task<IActionResult> GetAttenders()
        {
            var attenders = await _repo.GetAttenders();
            return Ok(attenders);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAttender(int id)
        {
            var attender = await _repo.GetAttender(id);
            return Ok(attender);
        }
    }
}