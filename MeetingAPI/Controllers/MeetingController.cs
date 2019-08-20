using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MeetingAPI.Data;
using MeetingAPI.Dtos;
using MeetingAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MeetingAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class MeetingController : ControllerBase
    {
        private readonly IMeetingRepository _repo;
        private readonly IMapper _mapper;

        public MeetingController(IMeetingRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetMeetings()
        {
            var meetings = await _repo.GetMeetings();
            var meetingsToReturn = _mapper.Map<IEnumerable<MeetingCalendarDto>>(meetings);
            return Ok(meetingsToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetMeeting(int id)
        {
            var meeting = await _repo.GetMeeting(id);
            var meetingToReturn = _mapper.Map<MeetingCalendarDto>(meeting);
            return Ok(meetingToReturn);
        }

        [HttpPost]

        public async Task<IActionResult> AddMeeting(MeetingCreateDto meetingCreateDto)
        {
            var meetingToCreate = _mapper.Map<Meeting>(meetingCreateDto);
            _repo.Add(meetingToCreate);
            if (await _repo.SaveAll())
                NoContent();

            throw new Exception($"Creating meeting failed on save");
        }
    }
}