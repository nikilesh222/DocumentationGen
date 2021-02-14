using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DocumentationGen
{
    public class Program
    {
        public static void Main(string[] args)
        {
//#if DEBUG
            CreateHostBuilder(args).Build().Run();
//#endif

//#if !DEBUG
//            new WebHostBuilder()
//            .UseKestrel()
//            .UseContentRoot(Directory.GetCurrentDirectory())
//            .UseIISIntegration()
//            .UseStartup<Startup>()
//            .Build().Run();
//#endif

        }

        public static IHostBuilder CreateHostBuilder(string[] args) 
        {
            return Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
        }
    }
}
