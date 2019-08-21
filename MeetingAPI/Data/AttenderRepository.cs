using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MeetingAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace MeetingAPI.Data
{
    public class AttenderRepository : IAttenderRepository
    {
        private readonly DataContext _context;

        public AttenderRepository(DataContext context)
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

        public async Task<Attender> GetAttender(int id)
        {
            var attender = await _context.Attenders.FirstOrDefaultAsync(m => m.Id == id);
            return attender;
        }

        public async Task<IEnumerable<Attender>> GetAttenders()
        {
            var attenders = await _context.Attenders.ToListAsync();
            return attenders;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
