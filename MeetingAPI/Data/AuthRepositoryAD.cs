﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MeetingAPI.Models;

namespace MeetingAPI.Data
{
    public class AuthRepositoryAD : IAuthRepository
    {
        public Task<User> Login(string username, string password)
        {
            throw new NotImplementedException();
        }

        public Task<bool> UserExists(string username)
        {
            throw new NotImplementedException();
        }
    }
}
