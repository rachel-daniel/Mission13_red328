﻿using System;
using Microsoft.EntityFrameworkCore;

namespace MovieAPI.Models
{
	public class MovieDbContext : DbContext
	{
        public MovieDbContext(DbContextOptions<MovieDbContext> options) : base(options)
        {
        }

        public DbSet<Movie> Movies { get; set; }
    }
}

