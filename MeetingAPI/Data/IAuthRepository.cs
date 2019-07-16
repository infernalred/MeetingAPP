using MeetingAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetingAPI.Data
{
    interface IAuthRepository
    {
        Task<User> Login(string username, string password);
    }
}
