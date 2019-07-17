using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MeetingAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace MeetingAPI.Data
{
    public class AuthRepositoryDB : IAuthRepository
    {
        private readonly DataContext _context;

        public AuthRepositoryDB(DataContext context)
        {
            _context = context;
        }
        public async Task<User> Login(string username, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Login == username);
            if (user == null)
                return null;

            if (!CheckPassword(password))
                return null;

            return user;
        }

        private bool CheckPassword(string password)
        {
            var _password = _context.Users.FirstOrDefaultAsync(p => p.Password == password);
            if (_password == null)
                return false;

            return true;
        }

        public async Task<bool> UserExists(string username)
        {
            if (await _context.Users.AnyAsync(x => x.Login == username))
                return true;

            return false;
        }
    }
}
