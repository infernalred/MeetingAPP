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
                    o.MapFrom(s => new DateTime(s.Date.Year, s.Date.Month, s.Date.Day, s.TimeStart.Hour, s.TimeStart.Minute, 0).ToLocalTime());
                })
                .ForMember(d => d.End, o =>
                {
                    o.MapFrom(s => new DateTime(s.Date.Year, s.Date.Month, s.Date.Day, s.TimeEnd.Hour, s.TimeEnd.Minute, 0).ToLocalTime());
                })
                .ForMember(d => d.MeetingsAttenders, o =>
                {
                    o.MapFrom(s => s.Attenders.MeetingsAttenders());
                });
            CreateMap<Meeting, MeetingDetailsDto>()
                .ForMember(d => d.Attenders, o =>
                {
                    o.MapFrom(s => s.MeetingsAttenders.Select(x => x.Attender));
                })
                .ForMember(d => d.TimeStart, o =>
                {
                    o.MapFrom(s => s.Start);
                })
                .ForMember(d => d.TimeEnd, o =>
                {
                    o.MapFrom(s => s.End);
                });
            CreateMap<Attender, AttenderDetailsDto>();
            CreateMap<User, UserDto>();




        }
    }
}
