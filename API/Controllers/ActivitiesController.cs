
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
        private readonly IMediator _mediator; // Change to IMediator
        public ActivitiesController(IMediator mediator) // Add parameter name for IMediator
        {
            _mediator = mediator; // Change to _mediator
        }

        [HttpGet] //api/activities
        public async Task<ActionResult<List<Domain.Activity>>> GetActivities()
        {
            return await _mediator.Send(new List.Query());
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
