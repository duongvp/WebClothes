using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebClothes.ViewModel
{
    public class ListOrder
    {
        public int Id { get; set; }
        public Nullable<int> OrderId { get; set; }
        public String productPrice { get; set;}
        public Nullable<int> number { get; set; }
        public String tt { get; set; }
        public string size { get; set; }
    }
}