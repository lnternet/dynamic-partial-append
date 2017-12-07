using DynamicModelTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DynamicModelTest.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet]
        public ActionResult Index()
        {
            var model = new MyDynamicModel();
            model.Teacher = "Albus Dumbledore";
            model.Students = new List<Student>();
            model.Students.Add(new Student { Name = "Harry Potter" });
            model.Students.Add(new Student { Name = "Hermione Granger" });
            model.Students.Add(new Student { Name = "Ron Weasley" });

            return View("Index", model);
        }

        [HttpPost]
        public ActionResult Index(MyDynamicModel model)
        {
            
            return View();
        }

        [HttpGet]
        public ActionResult AddStudent(int count)
        {
            return PartialView("_StudentPartial", 
                new StudentPartialModel { Index = count, Student = new Student() }
            );
        }
    }
}