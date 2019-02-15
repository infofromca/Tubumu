﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using OrchardCore.BackgroundTasks;

namespace Tubumu.Modules.Framework.BackgroundTasks
{
    [BackgroundTask(Schedule = "* * * * *", Description = "Idle background task.")]
    public class IdleBackgroundTask : IBackgroundTask
    {
        private readonly ILogger<IdleBackgroundTask> _logger;

        public IdleBackgroundTask(ILogger<IdleBackgroundTask> logger)
        {
            _logger = logger;
        }

        public Task DoWorkAsync(IServiceProvider serviceProvider, CancellationToken cancellationToken)
        {
            _logger.LogInformation($"IdleBackgroundTask: {DateTime.Now}");
            return Task.CompletedTask;
        }
    }
}