namespace BLP.Api.Models
{
    public class CreditEvaluationModel
    {
        public int Id { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int CustomerId { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string loan_amnt { get; set; }
        /// <summary>
        /// Time for repayment in Months
        /// </summary>
        public string term { get; set; }
        /// <summary>
        ///  Employemnt in Years
        /// </summary>
        public string emp_length { get; set; }
        /// <summary>
        /// Ownership Type(’mortgage’, ’own’,’rent’,’none’)
        /// </summary>
        public string home_ownership { get; set; }
        /// <summary>
        /// Annual Salary of the borrower in dollars
        /// </summary>
        public string annual_inc { get; set; }
        /// <summary>
        /// The purpose of the loan
        /// </summary>
        public string purpose { get; set; }
        /// <summary>
        /// Location of the borrower
        /// </summary>
        public string addr_state { get; set; }
        /// <summary>
        /// The debt-to-income ratio of the borrower
        /// </summary>
        public string dti { get; set; }
        /// <summary>
        /// The number of times the borrower had been 30+ days past due on a payment in the past 2 years
        /// </summary>
        public string delinq_2yrs { get; set; }
        /// <summary>
        /// The borrower's revolving line utilization rate
        /// </summary>
        public string revol_util { get; set; }

    }
}