using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Intrinsics.X86;
using System.Text;
using System.Threading.Tasks;

namespace Geonorge.MinSide.Infrastructure.Context
{
    [Index(nameof(Name), nameof(Username))]
    public class Shortcut
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        public DateTime Date { get; set; }
        public string Username { get; set; }
    }
}
