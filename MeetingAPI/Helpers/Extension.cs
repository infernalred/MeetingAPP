using MeetingAPI.Models;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingAPI.Helpers
{
    public static class Extension
    {
        public static void AddApplicaionError(this HttpResponse response, string message)
        {
            response.Headers.Add("Application-Error", message);
            response.Headers.Add("Access-Control-Expose-Headers", "Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin", "*");
        }

        public static List<MeetingsAttenders> MeetingsAttenders(this List<Attender> attenders)
        {
            List<MeetingsAttenders> meetingsAttenders = new List<MeetingsAttenders>();
            foreach (var attender in attenders)
            {
                meetingsAttenders.Add(new MeetingsAttenders {  AttenderId = attender.Id});
            }
            return meetingsAttenders;
        }
    }
}
