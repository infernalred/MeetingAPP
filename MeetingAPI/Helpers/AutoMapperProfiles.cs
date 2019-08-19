using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MeetingAPI.Dtos;
using MeetingAPI.Models;

namespace MeetingAPI.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Meeting, MeetingCalendarDto>()
                .ForMember(d => d.ResourceId, o =>
                {
                    o.MapFrom(s => s.RoomId);
                });
            CreateMap<MeetingCreateDto, Meeting>()
                .ForMember(d => d.Start, o =>
                {
                    o.MapFrom(s => s.Date + s.TimeStart);
                })
                .ForMember(d => d.End, o =>
                {
                    o.MapFrom(s => s.Date + s.TimeEnd);
                });
        }
    }
}
