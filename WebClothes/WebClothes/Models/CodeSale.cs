//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebClothes.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class CodeSale
    {
        public int Id { get; set; }
        public string SaleCode { get; set; }
        public Nullable<decimal> Discount { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<System.DateTime> EndedDate { get; set; }
        public string CreatedBy { get; set; }
    }
}
