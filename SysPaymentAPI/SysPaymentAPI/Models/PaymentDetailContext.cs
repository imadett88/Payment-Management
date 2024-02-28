using Microsoft.EntityFrameworkCore;

namespace SysPaymentAPI.Models
{
    public class PaymentDetailContext : DbContext
    {
        public PaymentDetailContext(DbContextOptions options) :base(options)
        {
            
        }

        public DbSet<PaymentDetail> PaymentDetails { get; set; }
    }
}
