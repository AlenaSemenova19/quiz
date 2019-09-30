using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SimpleQuiz.Model;

namespace SimpleQuiz
{
    public class Database : DbContext
    {
        public DbSet<Answer> Answers { get; set; }
        public DbSet<Question> Questions { get; set; }
        public Database(DbContextOptions<Database> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
    }
}
