using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MeetingAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace MeetingAPI.Data
{
    public class MeetingRepository : IMeetingRepository
    {
        private readonly DataContext _context;

        public MeetingRepository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<Meeting> GetMeeting(int id)
        {
            var meeting = await _context.Meetings.Include(x => x.MeetingsAttenders).FirstOrDefaultAsync(m => m.Id == id);
            return meeting;
        }

        public async Task<IEnumerable<Meeting>> GetMeetings()
        {
            var meetings = await _context.Meetings.Include(x => x.MeetingsAttenders).ToListAsync();
            return meetings;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
