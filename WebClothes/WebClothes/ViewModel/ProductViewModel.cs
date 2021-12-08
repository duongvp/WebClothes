using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebClothes.Models;

namespace WebClothes.ViewModel
{
    public class ProductViewModel
    {
        public Product  pro { get; set; }
        public Category category { get; set; }

        public CategoryChild categoryChild { get; set; }
        public OrderDetail MyProperty { get; set; }

        public Order OrderCustomer { get; set; }


    }
}