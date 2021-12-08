using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebClothes.Models;

namespace WebTest.Controllers
{
    
    public class HomeController : Controller
    {
        WebClothesEntities1 db = new WebClothesEntities1();
        public ActionResult Index()
        {
            ViewBag.list = db.Products.Where(x=>x.Status==true && x.IsDeleted==false);
            return View();
        }
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}