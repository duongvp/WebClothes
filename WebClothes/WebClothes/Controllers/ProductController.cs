using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebClothes.ViewModel;
using WebClothes.Models;


namespace WebClothes.Controllers
{
    public class ProductController : Controller
    {
         WebClothesEntities1 db = new WebClothesEntities1();
        // GET: Product
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult GetCategory()
        {
            return Json(db.Categories.Where(x => x.IsDeleted == false).ToList());
        }
        [HttpPost]
        public PartialViewResult GetListCategory(int id)
        {
            ViewBag.categoryid = db.CategoryChilds.ToList();
            var data = db.CategoryChilds.Where(x => x.CategoryId == id).ToList();
            return PartialView(data);
        }
        
        public ActionResult ListProduct(int Id)
        {
            ViewBag.category = db.Categories.Find(Id);
            // cần lấy category
            // cỏlor
            // size
            ViewBag.colors = db.Colors.ToList();
            ViewBag.sizes = from s in db.Sizes
                            group s by s.Size1 into g
                            select new ListSize()
                            {
                               Size=g.Key
                            };
            List<Product> data = db.Products.Where(x => x.CategoryId == Id && x.Status == true && x.IsDeleted == false || x.CategoryChildId==Id).ToList();
            return View(data);
        }
        public ActionResult ListProductChild(int id)
        {
            var data = db.Products.Where(x => x.CategoryChildId == id).ToList();
            return View(data);
        }
        [HttpPost]
        public PartialViewResult GetListImage(int id)
        {
            var data = db.ListImages.Where(x => x.ProductDetailId == id).ToList();
            return PartialView(data);
        }
        public ActionResult Detail(int id)
        {
            var obj = db.Products.Find(id);
            var query = from c in db.Products
                        join d in db.CategoryChilds
                        on c.CategoryChildId equals d.Id
                        where c.Id != id 
                        select new ProductViewModel {
                        pro = c,
                        categoryChild=d
                        };
            ViewBag.relatedPro = query.ToList();
            ViewBag.size = (db.Sizes.Where(x => x.ProducDetailtId == id)).ToList();
            ViewBag.Listimage = (db.ListImages.Where(x => x.ProductDetailId == id)).ToList();
            return View(obj);
        }
        public ActionResult TableSize()
        {
            return View();
        }
        public ActionResult Cart()
        {
            return View();
        }
        public ActionResult Pay()
        {
            return View();
        }
        public JsonResult GetCodeSale(string val)
        {
            return Json(db.CodeSales.Where(x=>x.SaleCode==val).ToList());
        }
        [HttpPost]
        public PartialViewResult GetProductColor(int id)
        {
            var obj = (db.Products.Where(x => x.ColorId == id).ToList());
            return PartialView(obj);
        }
        [HttpPost]
        public PartialViewResult GetProductSize(string name)
        {
            var obj = from c in db.Sizes
                      join d in db.Products
                      on c.ProducDetailtId equals d.Id
                      where c.Size1 == name
                      select new ProductViewModel()
                      {
                          pro = d
                      };
            return PartialView(obj);
        }
        [HttpPost]
        public ActionResult Search(string txt)
        {
            ViewBag.searchname = txt;
            var data = db.Products.Where(x => x.Name.Contains(txt));
            return View(data);
        }   
        public JsonResult InfoCustomer(Order customer,List<ListOrder> pro)
        {
                customer.CreatedDate = DateTime.Now;
                customer.Status = 1;
                customer.IsDeleted = false;
                db.Orders.Add(customer);
                db.SaveChanges();
                var orderid = new Order();
                orderid=db.Orders.Find(customer.Id);
                var OrderDetail = new List<OrderDetail>();
                if (pro.Count >= 1)
                {
                    for (var i = 0; i < pro.Count; i++)
                    {
                    var detail = new OrderDetail()
                    {
                        ProductId = pro[i].Id,
                        OrderId = orderid.Id,
                        Quantity = pro[i].number,
                        Price = pro[i].productPrice,
                        total = pro[i].tt,
                        Size = pro[i].size
                     };
                        OrderDetail.Add(detail);
                    }
                    db.OrderDetails.AddRange(OrderDetail);
                }
               db.SaveChanges();
               return Json(new { success = true, message = "ok", status = 200 });
        }
       public ActionResult Confirm()
        {
            return View();
        }

    }
}