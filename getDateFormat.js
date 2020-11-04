// Description
// Problem
// Description
// Being
// a
// developer, you
// should
// know
// to
// process
// a
// large
// number
// of
// records
// with scripts.You are
// given
// records
// of
// T
// customers
// of
// your
// company.Each
// record
// has
// the
// following
// information in the
// following
// format:
//
//     <customer_name>,
//         <customer_no>,
//             <date_of_birth>,
//                 <record_processing_date>
//
//                     Where:
//
//                     <customer_name>: Name of customer, can contain one or many space separated tuples having English
//                         lowercase/uppercase letters. For example, “gopal” and “Ram Kumar” (spaces can be more than one)
//                         <customer_no>: Enrollment number of customer, unique positive integer of at most six digits.
//                             <date_of_birth>: Date of birth of customer, format is dd.mm.yyyy where 1
//                                 <
//                                 =dd
//                                 <
//                                 =30, 1
//                                 <=mm
//                                 <
//                                 =12, 1980
//                                 <=yyyy
//                                 <
//                                 =2030
//                                 <record_processing_date>: Date of processing of record, same format as of
//                                 <date_of_birth>.
//                                     Now the company wants to know the age of each customer to give them age-specific
//                                     offers. The age of a customer is calculated by counting the number of days between:
//                                     <record_processing_date>and his
//                                         <date_of_birth>.
//
//                                             Given T such records, your task is to print the age (in number of days) of
//                                             the customer for each record.
//
//                                             Input Format
//                                             The first line has T, the number of records.
//                                             For next T lines, each line has a customer record in the specified format.
//                                             Constraints
//                                             1
//                                             <
//                                             = T
//                                             <
//                                             = 50
//                                             All dates will be valid dates.
//                                                 Output Format
//                                                 For each record, print age (in number of days) of the customer.
//                                                 Evaluation Parameters
//                                                 Sample Input
//                                             2
//                                             Ram Kumar, 134, 20.5.1994, 20.4.2002
//                                             gopal, 24, 31.12.1995, 21.02.2017
//                                             Sample Output
//                                             2892
//                                             7723
//                                             Explanation
//                                                 The difference between dates 20.4.2002 and 20.5.1994 is 2921 days. And
//                                                 the difference between dates 21.02.2017 and 31.12.1995 is 7723 days.
//
//
//                                                 Execution time limit
//                                                 Default.
