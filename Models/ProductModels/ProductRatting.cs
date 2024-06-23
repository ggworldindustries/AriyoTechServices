using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.ProductModels
{
    public class ProductRatting
    {
        public int Id { get; set; }
        public int RattingValue { get; set; }
        public string UserId {  get; set; } = string.Empty;
        public string ProductId { get; set; }= string.Empty;
        public string RattingName { get; set; } = string.Empty;
        public string RatingDescription { get; set; } = string.Empty;
        public DateOnly RatingDate { get; set; }
        public TimeOnly RatingTime { get; set; }
        public RatingStage RatingStage { get; set; }

    }
}
public enum RatingStage
{
    Publishaed,
    Cancelled,
    Pending
}