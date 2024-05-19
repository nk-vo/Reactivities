
using System.Collections.Generic;
using System.Diagnostics;
using Application.Activities;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        [HttpGet] //api/activities
        public async Task<ActionResult<List<Domain.Activity>>> GetActivities()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")] //api/activities/id
        public async Task<ActionResult<Domain.Activity>> GetActivity(Guid id)
        {
            return Ok();
        }

        private ActionResult<Domain.Activity> Ok()
        {
            throw new NotImplementedException();
        }
    }
}
