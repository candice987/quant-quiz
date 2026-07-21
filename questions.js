// CFA Level II - Quantitative Methods question bank (59 questions)
// Extracted via OCR from 数量答案.pdf; answers verified against explanations.
window.QUESTIONS = [
  {
    "id": 1,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "An analyst uses the past two years of monthly data to estimate a linear trend model for the monthly AUD/USD exchange rate, yielding the estimated model Rate_t = 0.7837 - 0.0050t, where t = 1 corresponds to the start of the 2-year period. The forecasted exchange rate one year from now is closest to:",
    "options": {
      "A": "0.6037.",
      "B": "0.6637.",
      "C": "0.9637."
    },
    "answer": "A",
    "explanation": "A. Correct because one year from now implies that t is month 36 (= 24 months + 12 months). This implies that the forecasted exchange rate is. 07837 -0 0050 x 36 = 0 6037 B. Incorrect because this assumes that t is 24 rather than 36, yielding a forecasted exchange rate of: 0 7837-0 0050 x 24 = 0 6637 C. Incorrect because the forecasted exchange rate is calculated by adding (instead of subtracting) the slope estimate times 36 as. 0 7837 + 0 0050 x 36 = 00637"
  },
  {
    "id": 2,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "An analyst estimates a linear trend model for the dependent variable y and obtains the following regression results: Intercept coefficient = 1.1500 (t-statistic 3.0295); slope coefficient (t) = 2.0136 (t-statistic 31.3824); R² = 0.9909; standard error = 0.6730. The predicted value of y given t = 2 is closest to:",
    "options": {
      "A": "4.03.",
      "B": "4.31.",
      "C": "5.18."
    },
    "answer": "C",
    "explanation": "A. Incorrect because it omits the intercept to calculate the predicted value of the dependent variable; y, = 2.0136(2) = 4.0272 = 4.03. B. Incorrect because it mixes up the intercept and slope coefficients, and wrongly calculates yr = 1.1500(2) + 2.0136 = 4.3136 4.31. C. Correct because the predicted (or fitted) value of the dependent variable (yt ) given the value of the independent variable (t = 2) is calculated as: yr = ho + bl (t), where bo = the estimated y-intercept term = 1.1500, and bl = the estimated slope coefficient = 2.0136. Thus, = 1.1500 + 2.0136(2) = 5.1772 = 5.18. While this predicted value is for the in-sample period, a comparison of this value with the actual value may indicate how well the model fits the data."
  },
  {
    "id": 3,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "Which of the following statements about a linear trend model and the Durbin-Watson statistic is most accurate?",
    "options": {
      "A": "A Durbin-Watson statistic close to 2.0 indicates that the errors in a time-series model are serially uncorrelated.",
      "B": "A statistically significantly low value of the Durbin-Watson statistic indicates that the errors in a time-series model are negatively serially correlated.",
      "C": "A statistically significantly high value of the Durbin-Watson statistic indicates that the errors in a time-series model are positively serially correlated."
    },
    "answer": "A",
    "explanation": "A. Correct because, if a linear trend model is correctly specified, the Durbin-Watson statistic should not differ significantly from 2.0. Othenvise, the errors in the model are either positively or negatively serially correlated, and that correlation can be used to build a better forecasting model for those time series. B. Incorrect because significantly small values of the Durbin-Watson statistic indicate positive serial correlation; significantly large values point to negative serial correlation. So, a significantly low value of the Durbin-Watson statistic indicates that the model errors are positively, not negatively, serially correlated. C. Incorrect because significantly small values of the Durbin-Watson statistic indicate positive serial correlation; significantly large values point to negative serial correlation. So, a significantly high value of the Durbin-Watson statistic indicates that the model errors are negatively, not positively, serially correlated."
  },
  {
    "id": 4,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "Which of the following trend models are regression models with a single independent variable?",
    "options": {
      "A": "Linear trend models only",
      "B": "Log-linear trend models only",
      "C": "Both linear trend models and log-linear trend models"
    },
    "answer": "C",
    "explanation": "A. Incorrect because both the linear trend model and the log-linear trend model are single-variable regression models. B. Incorrect because both the linear trend model and the log-linear trend model are single-variable regression models. C. Correct because both the linear trend model and the log-linear trend model are single-variable regression models. The linear trend model is given by bo + blt+ Et and the log-linear trend model is given by In(yt) = bo + bit + Ct. In both models, t (time) is the only independent variable."
  },
  {
    "id": 5,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "Which of the following is required for a time series to be covariance stationary?",
    "options": {
      "A": "Only the variance of the time series must be constant and finite in all periods",
      "B": "Only the expected value of the time series must be constant and finite in all periods",
      "C": "Both the variance and the expected value of the time series must be constant and finite in all periods"
    },
    "answer": "C",
    "explanation": "A. Incorrect because both the variance and the expected value of the time series are required to be constant and finite in all periods for the time series to be covariance stationary. B. Incorrect because both the variance and the expected value of the time series are required to be constant and finite in all periods for the time series to be covariance stationary. C. Correct because, for a time series to be covariance stationary, the variance of the time series must be constant and finite in all periods, and the expected value of the time series must be constant and finite in all periods."
  },
  {
    "id": 6,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "An analyst forecasts the R&D spend of a pharmaceutical company using an AR(1) process by modeling the quarterly R&D spend per dollar of revenue. The estimated model is: R&DSpend_t = 0.25 + 0.12(R&DSpend_{t-1}). If the current quarter's R&D spend per dollar of revenue is $0.15, the two-quarter-ahead forecast of the R&D spend based on this model is closest to:",
    "options": {
      "A": "$0.268.",
      "B": "$0.282.",
      "C": "$0.490."
    },
    "answer": "B",
    "explanation": "A. Incorrect because this is the forecast for the R&D spend for the next quarter, calculated as: R&DSpendt+l = 0.25 + 0.12(0.15) = 0.268. B. Correct because, using the chain rule of forecasting, the forecast for the R&D spend in the next quarter is: R&DSpendt+1 = 0.25 + 0.12(0.15) = 0.268. - 0.25 + 0.12(0.268) = 0.282. The forecast for the R&D spend in the following quarter is: R&DSpendt+2 - C. Incorrect because the forecast for the R&D spend in the two-quarter-ahead forecast is calculated - 0.25 + 0.12(2) = 0.490. incorrectly as: R&DSpendt+1 -"
  },
  {
    "id": 7,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "A third-order autoregressive model uses:",
    "options": {
      "A": "three past values of the variable to predict the current value of the variable",
      "B": "the past value and the current value of the variable to predict the subsequent value of the variable",
      "C": "the past value of the variable to predict the current value and two subsequent values of the variable."
    },
    "answer": "A",
    "explanation": "A. Correct because a pth-order autoregression, AR(p), for the variable xt is shown by xt = bo + + b2Xt-2 + + bpxt_p + In this equation, p past values of xt are used to predict the current value of Xt. Thus, a third-order autoregressive model [AR(3)] uses three past values to predict the current value of the variable. B. Incorrect because a third-order autoregressive model [AR(3)] uses three past values to predict the current value of the variable. C. Incorrect because a third-order autoregressive model [AR(3)] uses three past values (not one) to predict the current value (and not also two subsequent values) of the variable."
  },
  {
    "id": 8,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "Which of the following is most consistent with a correctly specified autoregressive model?",
    "options": {
      "A": "Residual values are constant and finite.",
      "B": "Residual autocorrelations differ significantly from zero.",
      "C": "Autocorrelations of the error term are not significantly different from zero."
    },
    "answer": "C",
    "explanation": "A. Incorrect because the residual values are the differences between the time series and the trend, and they do not need to be constant for the model to be correctly specified. B. Incorrect because we estimate the error autocorrelation using the sample autocorrelations of the residuals (residual autocorrelations) and their sample variance. If significance tests show that the residual autocorrelations differ significantly from 0, the model is not correctly specified. C. Correct because we can determine whether we are using the correct time-series model by testing whether the autocorrelations of the error term (error autocorrelations) differ significantly from 0. If they do, the model is not specified correctly. Given that, in our case, the autocorrelations of the error term are not significantly different from zero, this does not suggest misspecification."
  },
  {
    "id": 9,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "An analyst is comparing the out-of-sample forecasting performance of an AR(1) model and an AR(2) model for monthly inflation rates. Which of the following metrics is the most appropriate for making this comparison?",
    "options": {
      "A": "R² (coefficient of determination).",
      "B": "Durbin-Watson statistic.",
      "C": "Root mean squared error."
    },
    "answer": "C",
    "explanation": "A. Incorrect because a model's R2 measures how much of the variation in the dependent variable is attributable to the independent variable(s), not the relative difference in the out-of-sample forecasting performance between models. B. Incorrect because a model's Durbin-Watson statistic tests whether the regression errors are serially correlated, not whether the out-of-sample forecasting performance of one model is better than that of another model. C. Correct because, typically, we compare the out-of-sample forecasting performance of forecasting models by comparing their root mean squared error (RMSE), which is the square root of the average squared error. The model with the smallest RMSE is judged the most accurate."
  },
  {
    "id": 10,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "An analyst compares the out-of-sample forecasting performance of three autoregressive models on the same dataset: Model 1 has RMSE = 3.20 (order 1), Model 2 has RMSE = 1.55 (order 2), and Model 3 has RMSE = 1.05 (order 3). Which of the models is most accurate?",
    "options": {
      "A": "Model 1.",
      "B": "Model 2.",
      "C": "Model 3."
    },
    "answer": "C",
    "explanation": "A. Incorrect because Model 1 has the largest root mean squared error (RMSE) of 3.20, while the model with the smallest (not the largest) RMSE is judged the most accurate. B. Incorrect because Model 2 has a root mean squared error (RMSE) of 1.55, which is larger than that of Model 3 (1.05). The model with the smallest RMSE is judged the most accurate. C. Correct because we compare the out-of-sample forecasting performance of forecasting models by comparing their root mean squared error (RMSE), which is the square root of the average squared error. The model with the smallest RMSE is judged the most accurate. Model 3 has the lowest RMSE and thus is the most accurate."
  },
  {
    "id": 11,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "Regression coefficient estimates in a time-series model can change substantially due to changes in:",
    "options": {
      "A": "the length of the sample period only",
      "B": "the starting point of the sample period only",
      "C": "both the length and the starting point of the sample period."
    },
    "answer": "C",
    "explanation": "A. Incorrect because the choice of the starting point of the sample period can also impact the estimates of regression coefficients of a time-series model. B. Incorrect because the choice of the length of the sample period can also impact the estimates of regression coefficients of a time-series model. C. Correct because the estimates of regression coefficients of a time-series model can change substantially across different sample periods used for estimating the model. Often, the regression coefficient estimates of a time-series model estimated using an earlier sample period can be quite different from those of a model estimated using a later sample period. Similarly, the estimates can be different between models estimated using relatively shorter and longer sample periods."
  },
  {
    "id": 12,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "A random walk process:",
    "options": {
      "A": "is a covariance-stationary time series.",
      "B": "has a well-defined mean-reverting level.",
      "C": "is a special case of an AR(1) model with an intercept equal to 0 and a slope equal to 1."
    },
    "answer": "C",
    "explanation": "A. Incorrect because, in a random walk process, as t grows large, the variance of xt grows without an upper bound: It approaches infinity. This lack of upper bound, in turn, means that a random walk is not a covariance-stationary time series, because a covariance-stationary time series must have a finite variance. B. Incorrect because an AR(I) model is specified as xt = bo + bpq+ and, if xt is at its mean-reverting level, then bo + or bo/(l - bl). In a random walk, however, bo = 0 and bl = 1, so bo/(l - bl) = 0/0. Therefore, a random walk has an undefined mean-reverting level. C. Correct because an AR(I) model is specified as xt = bo + blXt+ Et and a random walk model is specified as xt = xt_l + This implies that the random walk model is a special case of an AR(I ) model with bo = 0 and bl = 1."
  },
  {
    "id": 13,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "Random walks are a special case of an autoregressive model of order:",
    "options": {
      "A": "zero",
      "B": "one",
      "C": "two."
    },
    "answer": "B",
    "explanation": "A. Incorrect because random walks use a variable with a one-period lag and thus are a special case of an AR(I) model, not an AR(O) model. B. Correct because a random walk is a time series in which the value of the series in one period is the value of the series in the previous period plus an unpredictable random error. This equation is a special case of an AR(I) model with bo = 0 and bl = 1. A random walk is described by the following equation: xt = xt-l + Et whereas an AR(I) model is described by the following equation: C. Incorrect because random walks only use a variable with a one-period lag in their equations, and thus are a special case of an AR(I) model, not an AR(2) model."
  },
  {
    "id": 14,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "A currency analyst is using simple linear regression analysis to investigate the relationship between the US dollar/Japanese yen exchange rate movements and the risk-free interest rate differential between the two countries. In which of the following situations would the analyst need to examine whether the two time series are cointegrated?",
    "options": {
      "A": "When both time series have unit roots.",
      "B": "When neither time series has a unit root.",
      "C": "When one time series has a unit root and the other one does not."
    },
    "answer": "A",
    "explanation": "A. Correct because, if both of the variables have unit roots, then we would need to evaluate whether the variables are cointegrated. B. Incorrect because, if none of the time series has a unit root, then we can safely use linear regression to test the relations between the two time series. So, in this case, the analyst would be able to model the two time series using a linear regression model and would not need to examine whether the two time series are cointegrated. C. Incorrect because, if one of the two variables has a unit root, then our analysis would not provide valid results. So, in this case, the analyst would only be able to model the two time series after appropriately transforming the time series with a unit root."
  },
  {
    "id": 15,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "Which of the following time-series models have a unit root?",
    "options": {
      "A": "AR(0) models.",
      "B": "Random walks.",
      "C": "Covariance-stationary AR(1) models."
    },
    "answer": "B",
    "explanation": "A. Incorrect because autoregressive models of order zero (i.e., AR(O) models) do not have a lag coefficient, and a time series has a unit root when its lag coefficient is equal to 1.0. In general, a pth-order autoregression, AR(p), for the variable xt is shown by: xt = bo + bixt_l + b2Xt-2 + + bpxt_p + Et. Thus, for AR(O): xt = bo + Ct. The lag coefficient in this model is equal to zero, not one (as there is no lagged value xt_l on the right-hand side of the equation). B. Correct because, if the lag coefficient is equal to 1 n, the time series has a unit root. By definition, all random walks, with or without a drift term, have unit roots. A random walk is described by the following equation: xt = xt_l + Efr where the coefficient corresponding to the lagged value (xt_l) of a time series (xt) is equal to 1.0.\n\n\nQuestion 15 of 59 A random walk is described by the following equation: xt = xt_l + Efr where the coefficient corresponding to the lagged value (xt_l) of a time series (xt) is equal to 1.0. C. Incorrect because, when a time series has a unit root, it means its lag coefficient is equal to 1.0. AR(I) models that have a lag coefficient greater than or equal to 1.0 would not be covariance stationary. If a time series comes from an AR(I) model, then to be covariance stationary, the absolute value of the lag coefficient, bl, must be less than 1.0. An AR(I) model is described by the equation: xt = bo + bixt_l + Et. If the time series is covariance stationary, bl must be strictly less than 1.0, and thus the time series cannot have a unit root."
  },
  {
    "id": 16,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "An analyst is investigating whether a time seriesxt has a unit root. To implement a Dickey- Fuller test, the analyst must first run a simple linear regression where the dependent variable is the first difference of the time series (xt - xt_l) and the independent variable is the:",
    "options": {
      "A": "first lag of the time series (xt_l)",
      "B": "first lag of the time series minus one (xt_l- 1)",
      "C": "first lag of the first difference of the time series (xt_l- xt-2)"
    },
    "answer": "A",
    "explanation": "A. Correct because, according to the Dickey-Fuller test; if there is a unit root in the AR(I) model (xt - xt_l = bo + gpq_l + q); then gl will be 0 in a regression where the dependent variable is the first difference of the time series (xt- xt_l) and the independent variable is the first lag of the time series (xt_l). B. Incorrect because, in a Dickey-Fuller test, the independent variable is the first lag of the time series, not the first lag of the time series minus one C. Incorrect because, in a Dickey-Fuller test, the independent variable is the first lag of the time semes, not the first lag of the first difference of the time series"
  },
  {
    "id": 17,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "An analyst forecasts the quarterly earnings growth of an airline using ten years of data and an AR(1) process with a fourth-quarter seasonal lag: EarnGrowth_t = b0 + b1(EarnGrowth_{t-1}) + b4(EarnGrowth_{t-4}) + e_t. Coefficient estimates: intercept 0.025, b1 = -0.320, b4 = 0.850. If the earnings growth was 2% in the most recent quarter and 3% four quarters ago, the predicted earnings growth for the current quarter is closest to:",
    "options": {
      "A": "3.2%.",
      "B": "4.4%.",
      "C": "5.1%."
    },
    "answer": "B",
    "explanation": "A. Incorrect because the earnings growth calculation mixes up the estimated earnings growth coefficients: 0 025 + 02) - 0 320(0 03) = 0 0324 - 3 2% B. Correct because the earnings growth is calculated as: 0.025 - 0 320(0.02) + 0 850(0.03) = 00441 = 4 4% C. Incorrect because the earnings growth calculation ignores the earnings growth in the previous quarter (which is statistically insignificant as the absolute value of the t-statistic is less than the critical value of 21)2 at the 0 05 significance level): 0025 + 0 850(0 03) = 00505 = 5 1%"
  },
  {
    "id": 18,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "An analyst is modeling a time series x_t as an AR(1) process and performs the following regression on the errors of the model: e_t = a0 + a1*e_{t-1} + u_t, where u_t is an error term. If the coefficient a1 is found to be positive and statistically significant, the analyst can conclude that x_t:",
    "options": {
      "A": "has a unit root.",
      "B": "is mean-reverting.",
      "C": "has heteroskedastic errors."
    },
    "answer": "C",
    "explanation": "A. Incorrect because the stated regression on the error term is designed to detect heteroskedasticity in the AR(I ) model, not whether it has a unit root To test for a unit root, a Dickey-Fuller test should be performed where the dependent variable is the first difference of the time series and the independent variable is the first lag of the time series. This test does not involve the errors of the original AR(I ) model specification B. Incorrect because the stated regression on the error term is designed to detect heteroskedasticity in the AR(I ) model, not its autoregressive/mean-reverting nature Moreover, if you are using an autoregressive model and heteroskedasticity is present, then the standard errors of the regression coefficients of your model will be incorrect. It is likely that because of heteroskedasticity, one or more of the lagged terms may appear statistically significant when in fact they are not. Therefore, if you use this model for your decision making, you may make some suboptimal decisions. C. Correct because heteroskedasticity is the dependence of the error term variance on the independent variable. In 1982, Robert F Engle suggested a way of testing whether the variance of the error in a particular time-series model in one period depends on the variance of the error in previous periods. He called this type of heteroskedasticity 'autoregressive conditional heteroskedasticity (ARCH)- Engle showed that we can test whether a time series is ARCH(I) by regressing the squared residuals from a previously estimated time-series model [in this case an AR(I) model] on a constant and one lag of the squared residuals. Given the specification of this model in the stem, if the estimate of al is statistically significantly different from zero, we conclude that the time series is ARCH(I), and that the time series has heteroskedastic errors."
  },
  {
    "id": 19,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "An analyst models the quarterly sales growth data of an online retailer and observes that the model's error term is heteroskedastic and follows an ARCH(2) process. This implies that the variance of the error term in the current quarter:",
    "options": {
      "A": "follows an autoregressive moving-average (ARMA) process",
      "B": "depends linearly on the squared errors from the previous two quarters",
      "C": "depends linearly on a time trend and the squared error from the previous quarter."
    },
    "answer": "B",
    "explanation": "A. Incorrect because the variance of the error term will depend linearly on the squared errors from the previous two quarters and will not follow an ARMA process. B. Correct because, in an ARCH(p) model, the variance of the error term in the current period depends linearly on the squared errors from the previous p periods. In the case of an ARCH(2) process, the variance of the error term will depend linearly on the squared errors from the previous two quarters C. Incorrect because the variance of the error term will depend linearly on the squared errors from the previous two quarters, and not on a time trend and the squared error from the previous quarter."
  },
  {
    "id": 20,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "An analyst estimates a simple linear regression of a time series y_t on another time series X_t. In which of the following situations could the estimates of the regression test statistics be valid?",
    "options": {
      "A": "Both the dependent variable y_t and the independent variable X_t have a unit root (and are cointegrated).",
      "B": "The dependent variable y_t has a unit root, but the independent variable X_t does not.",
      "C": "The independent variable X_t has a unit root, but the dependent variable y_t does not."
    },
    "answer": "A",
    "explanation": "A. Correct because: if both time series have a unit root, we need to establish whether the two time series are cointegrated before we can rely on regression analysis. Moreover, if they are cointegrated, the error term in the linear regression of one time series on the other will be covariance stationary. Accordingly the regression coefficients and standard errors will be consistent: and we can use them for hypothesis tests Thus, the regression test statistics will be valid in this situation If both time series have a unit root but are not cointegrated the error term in the linear regression will not be covariance stationary some regression assumptions will be violated: the regression coefficients and standard errors will not be consistent; and we cannot use them for hypothesis tests Therefore, whether estimates of the regression test statistics would be valid depends on the cointegration of the two time series, which is not stated in the question stem B. Incorrect because: if we reject the hypothesis of a unit root for the independent variable but fail to reject the hypothesis of a unit root for the dependent variable, the error term in the regression would not be covariance stationary Consequently the estimated regression coefficients and standard errors would be inconsistent. The regression coefficients might appear significant, but those results would be spurious. C. Incorrect because; if we reject the hypothesis of a unit root for the dependent variable but fail to reject the hypothesis of a unit root for the independent variable, the error term in the regression would not be covariance stationary and we cannot use linear regression to analyze the relation between the two time series"
  },
  {
    "id": 21,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "An analyst regresses changes in an exchange rate over time on the two countries' inflation rate differential. While each of the two time series has a unit root, the time series are not cointegrated. This implies that the error term in the linear regression will: 4.1 E",
    "options": {
      "A": "be covariance stationary and the regression coefficients will be consistent",
      "B": "be covariance stationary but the regression coefficients will not be consistent",
      "C": "not be covariance stationary and the regression coefficients will not be consistent."
    },
    "answer": "C",
    "explanation": "A. Incorrect becauset if both time series have a unit root but they are not cointegrated, the error term in the linear regression will not be covariance stationary B. Incorrect because. if both time series have a unit root but they are not cointegrated, the error term in the linear regression will not be covariance stationary C. Correct because; if both time series have a unit root but they are not cointegrated; the error term in the linear regression will not be covariance stationary, some regression assumptions will be violated, the regression coefficients and standard errors will not be consistent; and we cannot use them for hypothesis tests-"
  },
  {
    "id": 22,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "An analyst estimates an AR(2) model for the monthly sales of a company and calculates the squared residuals from this regression. To test for the presence of ARCH(I) in the residuals, the analyst should regress the squared residuals on a constant and:",
    "options": {
      "A": "a time trend, and test whether the time trend coefficient is statistically different from 0",
      "B": "one lag of the squared residuals, and test whether the slope coefficient is statistically different from 0",
      "C": "one lag of the squared residuals, and test whether the slope coefficient is statistically different from"
    },
    "answer": "B",
    "explanation": "A. Incorrect because, to test for ARCH(I we do the following: Regress the squared residual from your time-series model on a lagged value of the squared residual Test whether the coefficient on the squared lagged residual differs significantly from 0. So, the independent variable is one lag of the squared residuals, not a time trend. B. Correct because! to test for ARCH(I we do the following: Regress the squared residual from your time-series model on a lagged value of the squared residual and test whether the coefficient on the squared lagged residual differs significantly from 0 C. Incorrect because, to test for ARCH(I), we do the following: Regress the squared residual from your time-series model on a lagged value of the squared residual Test whether the coefficient on the squared lagged residual differs significantly from 0. So, the time series has an ARCH(I) process if the slope coefficient is statistically significantly different from 0, not 1"
  },
  {
    "id": 23,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "Which of the following statements about machine learning ismost accurate? ÉL.fiä",
    "options": {
      "A": "Unsupervised machine-learning algorithms do not make use of labeled data",
      "B": "Classification algorithms focus on making predictions of continuous target variables",
      "C": "Clustering algorithms focus on reducing the number of features while retaining variation across observations to preserve the information contained in that variation"
    },
    "answer": "A",
    "explanation": "A. Correct because unsupervised learning is machine learning [ML] that does not make use of labeled data. More formally, in unsupervised learning; we have inputs (Xs) that are used for analysis without any target (Y) being supplied. In unsupervised learning, because the ML algorithm is not given labeled training data; the algorithm seeks to discover structure within the data themselves. As such: unsupervised learning is useful for exploring new datasets because it can provide human experts with insights into a dataset too big or too complex to visualize. B. Incorrect because classification focuses on sorting observations into distinct categories, while regression focuses on making predictions of continuous target variables. C. Incorrect because clustering focuses on sorting observations into groups (clusters) such that observations in the same cluster are more similar to each other than they are to observations in other clusters, while dimension reduction focuses on reducing the number of features while retaining variation across observations to preserve the information contained in that variation"
  },
  {
    "id": 24,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "Which of the following statements about the sources of out-of-sample error is most accurate?",
    "options": {
      "A": "Base error occurs due to randomness in the data.",
      "B": "Variance error refers to the degree to which a model fits the training data.",
      "C": "Bias error refers to how much the model's results change in response to new data from validation and test samples."
    },
    "answer": "A",
    "explanation": "A. Correct because base error is due to randomness in the data B. Incorrect because variance error refers to how much the model's results change in response to new data from validation and test samples. Unstable models pick up noise and produce high variance, causing overfitting and high out-of-sample error, whilst bias error refers to the degree to which a model fits the training data C. Incorrect because bias error refers to the degree to which a model fits the training data Algorithms with erroneous assumptions produce high bias with poor approximation; causing underfitting and high in-sample error, whilst variance error refers to how much the model's results change in response to new data from validation and test samples."
  },
  {
    "id": 25,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "Which of the following statements about the support vector machine algorithm is most accurate?",
    "options": {
      "A": "Adding more training data away from the support vectors will affect the boundary.",
      "B": "The algorithm determines the boundary that is the furthest away from all the observations.",
      "C": "In soft margin classification, the discriminant boundary chosen minimizes the total error penalty regardless of margin width."
    },
    "answer": "B",
    "explanation": "A. Incorrect because adding more training data away from the support vectors will not affect the boundary since the margin is determined by the observations closest to the boundary in each set; and these observations are called support vectors B. Correct because the intuitive idea behind the SVM [support vector machine] algorithm is maximizing the probability of making a correct prediction by determining the boundary that is the furthest away from all the observations. C. Incorrect because: in soft margin classification, the SVM [support vector machine] algorithm will choose a discriminant boundary that optimizes the between a wider margin and a lower total error penalty rather than minimizing the total error penalty regardless of margin width"
  },
  {
    "id": 26,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "Which of the following statements about principal components analysis (PCA) is most accurate?",
    "options": {
      "A": "PCA transforms uncorrelated features of data into a few main, correlated composite variables.",
      "B": "An eigenvector gives the proportion of total variance in the initial data that is explained by each eigenvalue.",
      "C": "A scree plot is used to show the eigenvectors ordered from highest to lowest according to their eigenvalues."
    },
    "answer": "C",
    "explanation": "A. Incorrect because PCA is used to summarize or transform highly correlated (not uncorrelated) features of data into a few main, uncorrelated (not correlated) composite variables. A composite variable is a vanable that combines two or more variables that are statistically strongly related to each other. B. Incorrect because an eigenvalue gives the proportion of total variance in the initial data that is explained by each eigenvector: and not the other way around. The PCA algorithm orders the eigenvectors from highest to lowest according to their eigenvalues-that is, in terms of their usefulness in explaining the total variance in the initial data C. Correct because the PCA algorithm orders the eigenvectors from highest to lowest according to their eigenvalues-that is, in terms of their usefulness in explaining the total variance in the initial data (this is shown using a scree plot)"
  },
  {
    "id": 27,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "In a neural network, a given link has an initial weight of 0.20",
    "options": {
      "A": "If the learning rate is 0.10 and the partial derivative of the total error with respect to the initial weight is 0.25, the new weight isclosest to: c 0.175",
      "B": "0.195",
      "C": "0.225."
    },
    "answer": "A",
    "explanation": "A. Correct because the network weights are adjusted to reduce total error of the network and New weight = (Old weight) - (Learning rate) x (Partial derivative of the total error with respect to the old weight) = 0 20 - 25) - 0 175 B. Incorrect because it uses an incorrect formula: New weight = (Old weight) x [1 - (Learning rate) x (Partial derivative of the total error with respect to the old weight)] = 020[1 - (0 25)] = 0195 C. Incorrect because the minus sign in the correct formula has been replaced with a plus sign, resulting in 0 20 + (0 25) = 0 225"
  },
  {
    "id": 28,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "In a data analysis project, data wrangling refers to:",
    "options": {
      "A": "cleansing and preprocessing raw data",
      "B": "deriving numeric data from internal and external sources",
      "C": "exploratory data analysis, feature selection, and feature engineering."
    },
    "answer": "A",
    "explanation": "A. Correct because data preparation and wrangling involves cleansing and preprocessing of the raw data Cleansing may entail resolving missing values: out-of-range values, and the like. Preprocessing may involve extracting: aggregating, filtering, and selecting relevant data columns. B. Incorrect because this is the description for the data collection step, not data preparation and wrangling In the data collection step, the data traditionally used are mostly numeric data derived from internal and external sources. Such data are typically already in a structured tabular format, with columns of features, rows of instances, and each cell representing a particular value C. Incorrect because this is the description for the data exploration step, not data preparation and wrangling Data exploration involves three important tasks: exploratory data analysis: feature selection; and feature engineering Exploratory data analysis (EDA) is the preliminary step in data exploration. Exploratory graphs, charts, and other visualizations, such as heat maps and word clouds, are designed to summarize and observe data Feature selection is a process whereby only pertinent features from the dataset are selected for ML model training. Selecting fewer features decreases ML model complexity and training time. Feature engineering is a process of creating new features by changing or transforming existing features"
  },
  {
    "id": 29,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "Aggregation, filtration, and conversion are common transformations carried out as part of:",
    "options": {
      "A": "data collection",
      "B": "data wrangling",
      "C": "data exploration."
    },
    "answer": "B",
    "explanation": "A. Incorrect because the transformations described are carried out under data wrangling: not data collection B. Correct because data wrangling (preprocessing) involves making structured data ready for analyses and to make structured data ready for analyses, the data should be preprocessed. Data preprocessing primarily includes transformations and scaling of the data These processes are exercised on the cleansed dataset The following transformations are common in practice: extraction, aggregation, filtration, selection: and conversion C. Incorrect because the transformations described are carried out under data wrangling: not data exploration"
  },
  {
    "id": 30,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "Which of the following is a feature engineering technique where multi-word patterns that are particularly discriminative can be identified and their connection kept intact?",
    "options": {
      "A": "N-grams",
      "B": "Parts of speech",
      "C": "Name entity recognition"
    },
    "answer": "A",
    "explanation": "A. Correct because n-grams is a feature engineering/text processing technique where multi-word patterns that are particularly discriminative can be identified and their connection kept intact. For example, 'market' is a common word that can be indicative of many subjects or classes; the words 'stock market' are used in a particular context and may be helpful to distinguish general texts from finance-related texts B. Incorrect because parts of speech [POS] uses language structure and dictionaries to tag every token in the text with a corresponding part of speech- Some common POS tags are noun, verb, adjective, and proper noun C. Incorrect because the name entity recognition algorithm analyzes the individual tokens and their surrounding semantics while referring to its dictionary to tag an object class to the token"
  },
  {
    "id": 31,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "In error analysis for classification problems, a Type I error refers to the situation where:",
    "options": {
      "A": "both the predicted condition and the actual condition are negative.",
      "B": "the predicted condition is negative but the actual condition is positive.",
      "C": "the predicted condition is positive but the actual condition is negative."
    },
    "answer": "C",
    "explanation": "A. Incorrect because this refers to a true negative B. Incorrect because this is the description of a false negative or a Type II error. C. Correct because this is the description of a false positive or Type I error For classification problems, error analysis involves computing four basic evaluation metrics. true positive (TP), false positive (FP), true negative (TN), and false negative (FN) metrics. FP is also called a Type I error, and FN is also called a Type II error"
  },
  {
    "id": 32,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "In textual analysis of data, the inverse document frequency (IDF) measures how unique a term is across the entire corpus. If the entire corpus consists of 2,718 sentences and a particular word occurs in 1,618 sentences, the IDF is closest to:",
    "options": {
      "A": "0.52.",
      "B": "0.60.",
      "C": "1.68."
    },
    "answer": "A",
    "explanation": "A. Correct because IDF = log(1/DF), where log denotes the natural logarithm and Document Frequency DF - (Sentence count with word) / (Total number of sentences) = = 0 5953, so IDF = log(1/05953) = 05187 -0 52 B. Incorrect because this is DFI the Document Frequency, calculated as DF = (Sentence count with word) / (Total number of sentences) = 1618/2,718 = 0 5953 = 0 60 C. Incorrect because this is I/DF = 1/(1 = 1/0 5953 = 1 6799 = 1 68"
  },
  {
    "id": 33,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "In the analysis of textual data, \"noisy features\" refers to:",
    "options": {
      "A": "the most sparse tokens in the dataset only.",
      "B": "the most frequent tokens in the dataset only.",
      "C": "both the most sparse and the most frequent tokens in the dataset."
    },
    "answer": "C",
    "explanation": "A. Incorrect because noisy features are both the most frequent and most sparse (or rare) tokens in the dataset, not only the most sparse tokens B. Incorrect because noisy features are both the most frequent and most sparse (or rare) tokens in the dataset: not only the most frequent tokens. C. Correct because noisy features are both the most frequent and most sparse (or rare) tokens in the dataset. On one end noisy features can be stop words that are typically present frequently in all the texts across the dataset. On the other end. noisy features can be sparse terms that are present in only a few text cases"
  },
  {
    "id": 34,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "The data points in a given dataset have the following features: Maximum value = 212, Minimum value = 32, Mean = 120, Standard deviation = 40. If a new data point X_i has a value of 149, its normalized value (in the range [0, 1]) is closest to:",
    "options": {
      "A": "0.16.",
      "B": "0.65.",
      "C": "0.73."
    },
    "answer": "B",
    "explanation": "A. Incorrect because it uses (X/ - u) in the numerator rather than (X. Xmin), resulting in - - 32) = 29/180 = 0 1611 016 B. Correct because normalization is the process of rescaling numeric variables in the range of [0, 1] and to normalize variable X: the minimum value is subtracted from each observation and then this value is divided by the difference between the maximum and minimum values of X (X -X  |  ) as follows i = - - xm,n) = (149 - - 32) = 117/180 = 0 65 C. Incorrect because it is the standardized (not normalized) value of Xli calculated as i (standardized) = (K - u)/o = (149 - 120)/40 = 29/40 = 0 725 = 0 73"
  },
  {
    "id": 35,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "Which of the following statements about the regression process is most accurate?",
    "options": {
      "A": "The residuals should be analyzed before examining the model's goodness of fit.",
      "B": "A model should be used for forecasting after its in-sample performance is deemed acceptable.",
      "C": "If the dependent variable is discrete, the model should be estimated as a simple linear regression."
    },
    "answer": "A",
    "explanation": "A. Correct because the residuals should be analyzed to check if the assumptions of regression are satisfied and, if so; then only the goodness of fit of the model should be examined otherwise the model should be adjusted further B. Incorrect because, once the model is tested and its out-of-sample (not in-sample) performance is deemed acceptable, then it can be used for further identifying relationships between vanablesl for testing existing theories, or for forecasting C. Incorrect because, if the dependent variable is discrete-for example, an indicator variable such as whether a company is a takeover target or not a takeover target-then the model may be estimated as a logistic regression (not a linear regression)"
  },
  {
    "id": 36,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "Which of the following is most appropriately modeled using logistic regression?",
    "options": {
      "A": "A portfolio's return.",
      "B": "Whether or not a company is a likely takeover target.",
      "C": "The stock market's volatility in different economic conditions."
    },
    "answer": "B",
    "explanation": "A. Incorrect because a portfolio's return is a continuous variable. Logistic regression is only used when the dependent variable is discrete B. Correct because, when the dependent variable is discrete-for example, an indicator variable such as whether a company is a takeover target or not a takeover target-then, as we shall see, the model may be estimated as a logistic regression C. Incorrect because a stock market's volatility is a continuous variable. Logistic regression is only used when the dependent variable is discrete"
  },
  {
    "id": 37,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "Which of the following statements is most accurate with respect to interpreting a multiple regression with the equation Y_i = b0 + b1*X_1i + b2*X_2i + b3*X_3i + e_i?",
    "options": {
      "A": "e_i represents the stochastic part of the model.",
      "B": "If the change in each of the variables X1, X2, and X3 is zero, the change in Y is b0.",
      "C": "b3 represents the percentage variation in Y that can be explained by the variable X3."
    },
    "answer": "A",
    "explanation": "A. Correct because the error term; El, is the stochastic or random part of the model B. Incorrect because, if the change in each of the variables and is zero, the change in Yis zero (not bo). C. Incorrect because 133 measures the change in Y (not the variation in Y) for a one-unit change in assuming X1 and are held constant"
  },
  {
    "id": 38,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "With respect to multiple linear regression, a partial regression coefficient describes the impact of a change in the respective independent variable on the dependent variable, holding:",
    "options": {
      "A": "the intercept coefficient equal to zero",
      "B": "all other independent variables constant",
      "C": "the respective slope coefficient equal to zero."
    },
    "answer": "B",
    "explanation": "A. Incorrect because; when interpreting a partial regression coefficient, no specific assumptions about the intercept are required B. Correct because a slope coefficient in a multiple regression: known as a partial regression coefficient or a partial slope coefficient, must be interpreted with care. A partial regression coefficient describes the impact of that independent variable on the dependent variable: holding all the other independent variables constant C. Incorrect because the slope coefficient is the same as the partial regression coefficient, and is not assumed to be equal to zero"
  },
  {
    "id": 39,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "An analyst tests the assumptions of a multiple linear regression model by plotting the regression residuals on a normal Q-Q plot. If the data points align along the diagonal, this confirms the:",
    "options": {
      "A": "linearity assumption",
      "B": "normality assumption",
      "C": "independence of errors assumption."
    },
    "answer": "B",
    "explanation": "A. Incorrect because the linearity assumption requires that the relationship between the dependent variable and the independent variables is linear This is tested by making scatterplots of the dependent variable against the independent variables and not by plotting the regression residuals on a normal Q-Q plot. B. Correct because the normality assumption requires that the regression residuals are normally distributed and we can use a Q-Q plot to compare the model's standardized residuals to a theoretical standard normal distribution. If the residuals are normally distributed, they should align along the diagonal. C. Incorrect because the independence of errors assumption requires that the observations are independent of one another This is tested by making a scatterplot of the regression residuals against the dependent variable and not by plotting the regression residuals on a normal Q-Q plot."
  },
  {
    "id": 40,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "In the context of a multiple linear regression model, which of the following assumptions is required to make valid inferences about the model?",
    "options": {
      "A": "The independent variables are normally distributed.",
      "B": "The regression residuals are positively correlated across observations.",
      "C": "The variance of the regression residuals is the same for all observations."
    },
    "answer": "C",
    "explanation": "A. Incorrect because It is the regression residuals that are assumed to be normally distributed. and not the independent variables. Independent variables are not random- B. Incorrect because one of the assumptions of a multiple linear regression model is about the independence of the errors, specifically that the observations are independent of one another This implies that the regression residuals are uncorrelated across observations, and not positively correlated C. Correct because one of the assumptions of a multiple linear regression model is homoskedasticity i e that the variance of the regression residuals is the same for all observations"
  },
  {
    "id": 41,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "In multiple regression, the adjusted R²:",
    "options": {
      "A": "can be negative (less than zero).",
      "B": "helps indicate whether the model's predictions are biased.",
      "C": "is a suitable measure to test the significance of the model's fit."
    },
    "answer": "A",
    "explanation": "A. Correct because, mathematically, the relation between R2 and R2 (adjusted R2) is R2=I - -k- 1)) (1 _ R2)] Note that if k 2 1, then R2 is strictly greater than adjusted R2 Further, the adjusted R2 may be negative, whereas the R2 has a minimum of zero B. Incorrect because the adjusted R2 does not address whether the regression coefficients are significant or the predictions are biased, this requires examining residual plots and other statistics C. Incorrect because R2 and adjusted R2 are not generally suitable for testing the significance of the model's fit, for this, we explore the ANOVA further: calculating the F-statistic and other goodness-of-fit metrics"
  },
  {
    "id": 42,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "An analyst gathers goodness-of-fit measures for a dependent variable regressed on alternative sets of factors: Model 1 (Factor 1; Adjusted R² = 0.631; AIC = 13.156; BIC = 14.990), Model 2 (Factors 1 and 2; Adjusted R² = 0.652; AIC = 14.287; BIC = 15.189), Model 3 (Factors 1, 2, and 3; Adjusted R² = 0.648; AIC = 12.463; BIC = 16.397). Which of the models should be preferred for prediction purposes?",
    "options": {
      "A": "Model 1.",
      "B": "Model 2.",
      "C": "Model 3."
    },
    "answer": "C",
    "explanation": "A. Incorrect because this model has the lowest BIC, not AIC, and would be preferred if goodness of fit (not prediction) was the goal. BIC assesses a greater penalty for having more parameters in a model, so it will tend to prefer small B. Incorrect because this model has the highest adjusted R2 and not the lowest AIC. The former may increase when we add independent variables, thus we risk model overfitting, and the analyst should instead use the AIC C. Correct because, when developing a model for prediction purposes, then we would likely select the model that AIC indicates, i e., the model using Factors 1, 2, and 3. AIC is a measure of model parsimony, so a lower AIC indicates a better-fitting model. Model 3 has the lowest AIC value (12 463) among the three models"
  },
  {
    "id": 43,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "For a multiple linear regression analysis, the mean square regression (MSR) is 19.234 and the mean square error (MSE) is 1.358. The test statistic of the general linear F-test is closest to:",
    "options": {
      "A": "0.07.",
      "B": "0.93.",
      "C": "14.16."
    },
    "answer": "C",
    "explanation": "A. Incorrect because the Astatistlc should be calculated as MSR/MSE. Here, the answer is calculated incorrectly as MSE/MSR = 1 358/19 234 = 0 071 = 0 07 B. Incorrect because the F-statistic should be calculated as MSR/MSE_ Here. the answer is calculated incorrectly as 1 - MSE/MSR = 1 -1 358/19234 = 0029 = C. Correct because; for the multiple linear regression: Y/ = + blXli+ b2X2i+ where k is the number of independent variables: we can use the general linear F-test to test the null hypothesis that slope coefficients on all variables are equal to zero. The F-statistic is calculated in the same way as in simple regression-the ratio of the mean square regression (MSR) to the mean square error (MSE)-but the degrees of freedom are now k in the numerator and n - k- 1 in the denominator. F: MSR/MSE = 19 234/1.358 = 14163 = 1416"
  },
  {
    "id": 44,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "An analyst conducts a joint hypothesis test to determine whether adding two independent variables can improve the fit of a multiple regression model. The null hypothesis isHo: bl = b2 = 0, where bl and b2 are the partial regression coefficients of the two additional independent variables. If the F-statistic is less than the critical F-value but greater than zero, the analyst should include:",
    "options": {
      "A": "none of the additional independent variables in the model",
      "B": "only one of the additional independent variables in the model",
      "C": "both of the additional independent variables in the model."
    },
    "answer": "A",
    "explanation": "A. Correct because the test fails to reject the null hypothesis as the calculated F-statistic does not exceed the critical F-value There is not sufficient evidence to indicate that at least one slope (or partial regression) coefficient is different from zero. Hence, both additional independent variables should be excluded B. Incorrect because, if the F-statistic is less than the critical F-value, the test fails to reject the null hypothesis (Ho: bl = b2 = 0) and hence both additional independent variables should be excluded. This is a joint test of hypotheses for the slopes of the two additional independent variables and hence the F-test would jointly reject both variables. The F-statistic being greater than zero has no direct relevance. C. Incorrect because, if the F-statistic is less than the critical F-value, the test fails to reject the null hypothesis (Ho: bl = b2 = 0) and hence both additional independent variables should be excluded"
  },
  {
    "id": 45,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "A regression model is estimated using the equation Y = b0 + b1*X1 + b2*X2 + b3*X3 + e, where regression statistics show that X1 and X2 are highly statistically significant but X3 is not statistically significant. Which of the following statements about the use of the model for prediction is most accurate?",
    "options": {
      "A": "The model should not be used for prediction because X3 is not statistically significant.",
      "B": "X3 should be excluded from the prediction equation since it is not statistically significant.",
      "C": "X3 should be included in the prediction equation since it was used in estimating the slope coefficients."
    },
    "answer": "C",
    "explanation": "A. Incorrect because the model can still be used for prediction even if is not statistically significant If a regression model is estimated using all three independent variables: for example_ any prediction of the dependent variable must also include all three variables-even the ones that are not statistically significant This is because correlations between these variables were used in estimating the slope coefficients B. Incorrect because. if a regression model is estimated using all three independent vanables- for example: any prediction of the dependent variable must also include all three variables-even the ones that are not statistically significant. This is because correlations between these variables were used in estimating the slope coefficients C. Correct because: if a regression model is estimated using all three independent variables. for example, any prediction of the dependent variable must also include all three variables-even the ones that are not statistically significant This is because correlations between these variables were used in estimating the slope coefficients"
  },
  {
    "id": 46,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "An analyst builds the following multiple regression model for a company's P/E ratio: Intercept = 2.8, Factor 1 coefficient = 1.8, Factor 2 coefficient = -0.4. If Factor 1 and Factor 2 are assumed to be 12.5 and 5.3, respectively, the predicted P/E ratio is closest to:",
    "options": {
      "A": "20.4.",
      "B": "23.2.",
      "C": "27.4."
    },
    "answer": "B",
    "explanation": "A. Incorrect because this does not take into account the intercept of the model' (1.8 x 12 5) + (-0 4 x 5 3) = 20 38 = 20 4 B. Correct because: applying the multiple regression model, we get a predicted P/E ratio of 2 8 + (1 8 x 125) + (-0 4 x 52) = 2318 = 23 2 C. Incorrect because this reverses the sign for Factor 2 in the model' 28+(1 8 x 42 -274"
  },
  {
    "id": 47,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "Which of the following failures in regression functional form most likely leads to multicollinearity?",
    "options": {
      "A": "Inappropriate data pooling.",
      "B": "Inappropriate form of variables (variables needing transformation).",
      "C": "Inappropriate variable scaling."
    },
    "answer": "B",
    "explanation": "A. Incorrect because, if a regression model pools data from different samples that should not be pooled, this may lead to heteroskedasticity or serial correlation, not multicollinearity B. Correct because this refers to the case where one or more regression variables may need to be transformed before estimating the regressiom otherwise it may lead to heteroskedasticity or multicollinearity C. Incorrect because: if a regression model ignores a nonlinear relationship between the dependent and independent variables: this may lead to heteroskedasticity, not multicollinearity"
  },
  {
    "id": 48,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "Which of the following is the most appropriate corrective action if the error term in a regression model is correlated with one of the independent variables?",
    "options": {
      "A": "Use the natural logarithm of the independent variable in the revised model.",
      "B": "Include important variables that have been omitted and re-estimate the revised model.",
      "C": "Use the subsample of data most representative of conditions during the model forecasting period."
    },
    "answer": "B",
    "explanation": "A. Incorrect because using the natural logarithm of the independent variable in a revised model is a corrective action if we fail to account for nonlinearity in the relationship between the dependent variable and one or more independent variables. If the relation between variables becomes linear when one or more of the variables is represented as a proportional change in the variable, then we can correct the misspecification by taking the natural logarithm of the variable we want to represent as a proportional change. B. Correct because, if the residuals from a model have a clear linear relationship with the independent variable, the type of misspecification error is the omitted variable bias. The recommended correction for this misspecification error is to include the omitted variable and re-estimate the revised model C. Incorrect because using the subsample most representative of conditions during the forecasting period is a corrective action when pooling data from samples that should not be pooled"
  },
  {
    "id": 49,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "A Breusch-Pagan (BP) test is run on the residuals from two regression models to detect heteroskedasticity: Model 1 (BP test statistic = 5.458, p-value = 0.0195), Model 2 (BP test statistic = 0.046, p-value = 0.8302). If the level of significance is 5%, which of the following is the most appropriate conclusion that can be drawn?",
    "options": {
      "A": "Model 1 has homoskedastic residuals.",
      "B": "White's correction should be applied to Model 1.",
      "C": "The t-statistics for Model 2 cannot be relied upon."
    },
    "answer": "B",
    "explanation": "A. Incorrect because only Model 2 is homoskedastic since it has a P-value greater than On the other hand, the BP test indicates the presence of heteroskedasticity for Model 1 B. Correct because a Avalue of less than 0 05 on a BP test indicates the presence of heteroskedasticity (at the 5% significance level), and this is the case for Model 1 , in which case White's correction should be applied. By applying White's correction for heteroskedasticity, the coefficient standard errors will increase, thereby decreasing estimated t-statistics and increasing corresponding P-values for the independent variables. C. Incorrect because the P-value of Model 2 is greater than 005, indicating that the model is not heteroskedastic (at the 5% significance level) and thus the t-statistics for the original regression model can be relied upon. For Model 2, it is the BP test statistic that is less than 0 05 and not its P-value."
  },
  {
    "id": 50,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "Regression errors that are larger for larger values of the independent variable are referred to as:",
    "options": {
      "A": "homoskedastic errors.",
      "B": "robust standard errors.",
      "C": "heteroskedastic errors."
    },
    "answer": "C",
    "explanation": "A. Incorrect because, for a model with homoskedastic errors, there is no apparent relationship between the regression residuals and the value of the independent variable B. Incorrect because robust standard errors refer to the adjusted standard errors of the regression's estimated coefficients to account for heteroskedasticity. C. Correct because, when there are heteroskedastic errors, there is a systematic relationship between the value of the independent variable and the regression residuals: The residuals, which are the distance from the line, are larger for larger values of the independent variable"
  },
  {
    "id": 51,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "For an initial regression model with five independent variables and a sample size of 100, a Breusch-Godfrey test is carried out to test for serial correlation in the model's residuals up to lag two. The degrees of freedom of the F-statistic for this test are:",
    "options": {
      "A": "92 and 2.",
      "B": "93 and 2.",
      "C": "94 and 2."
    },
    "answer": "A",
    "explanation": "A. Correct because: for a Breusch-Godfrey test, the test statistic is approximately F-distributed with n- p- k- 1 and p degrees of freedom. where p is the number of lags, n is the sample size, and k is the number of independent variables. Here, n = 100, p = 2, and k = 5, so 1 = 100 - 2-5-1 = 92, hence the degrees of freedom are 92 (= n- p-k-l) and 2 p). B. Incorrect because the solution omits subtracting 1 in the first number of degrees of freedom, n-p-k= 100 - 2-5=93 C. Incorrect because the solution adds 1 instead of subtracting 1 in the first number of degrees of freedom, n-p"
  },
  {
    "id": 52,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "In time-series analysis, which of the following is most likely a result of positive serial correlation?",
    "options": {
      "A": "Fewer Type I errors.",
      "B": "Underestimated standard errors.",
      "C": "An overestimated population error variance."
    },
    "answer": "B",
    "explanation": "A. Incorrect because positive serial correlation may lead to more, not fewer, Type I errors. A Type I error is a false positive, i e a rejecting the null hypothesis when it is actually true B. Correct because positive serial correlation does not affect the consistency of regression coefficients, but it does affect statistical tests. First, the F-statistic may be inflated because the MSE [mean squared error] will tend to underestimate the population error variance Second positive serial correlation typically causes standard errors to be underestimated so t-statistics are inflated which (as with heteroskedasticity) leads to more Type I errors. A Type I error is a false positive, rejecting the null hypothesis when it is actually true. C. Incorrect because positive serial correlation may result in the MSE [mean squared error] underestimating: not overestimating: the population error variance"
  },
  {
    "id": 53,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "In the process of quantifying multicollinearity issues in a multiple regression, the coefficient of determination obtained from regressing Xj on the remaining independent variables is Rj² = 0.7. The variance inflation factor for Xj is closest to:",
    "options": {
      "A": "0.67.",
      "B": "1.96.",
      "C": "3.33."
    },
    "answer": "B",
    "explanation": "A. Incorrect because the plus sign is used instead of the minus sign in the correct formula, 1/(1 + Rj2) = 1/(1 + 0 72) = 0 6711-0 67 B. Correct because: by regressing one independent variable (Xj) on the remaining k- 1 independent variables, we obtain Rj2 for the regression-the variation in XJ explained by the other k- 1 independent variables-from which the forxj is VlFj= 1/(1 -Rj2) = 1/(1 -0 72) - -1 9608=1 96 The variance inflation factor (VIF) is used to quantify multicollinearity issues C. Incorrect because Rj in the correct formula is not squared, 1/(1 - R)) = 1/(1"
  },
  {
    "id": 54,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "An analyst computes the following variance inflation factors (VIFs) for the independent variables in a regression model: Variable 1 (VIF = 1), Variable 2 (VIF = 7), Variable 3 (VIF = 12). Serious multicollinearity issues requiring correction are indicated for:",
    "options": {
      "A": "Variable 1 only.",
      "B": "Variable 3 only.",
      "C": "Variable 2 and Variable 3."
    },
    "answer": "B",
    "explanation": "A. Incorrect because the VIF for Variable 1 is lower than 5, hence it falls within the normal range. The following are useful rules of thumb  |  VIFJ > 5 warrants further Investigation of the given independent variable VlFj> 10 indicates serious multicollinearity requiring correction B. Correct because the VIF for Variable 3 is higher than 10. VIF increases as the correlation between Variable j and the remaining independent variables increases: the higher the VIF, the more likely a given independent variable can be accurately predicted from the remaining independent variables, making it increasingly redundant. The following are useful rules of thumb VIFJ > 5 warrants further investigation of the given independent variable  |  VlFj > 10 indicates serious multicollinearity requiring correction C. Incorrect because the VIF for Variable 2 is lower than 10, hence it does not indicate serious multicollinearity. The following are useful rules of thumb VIFJ > 5 warrants further investigation of the given independent variable  |  VIFJ > 10 indicates serious multicollinearity requiring correction"
  },
  {
    "id": 55,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "In a regression analysis using four independent variables and 80 observations, the leverage measure above which an observation is considered potentially influential is closest to:",
    "options": {
      "A": "0.11.",
      "B": "0.15.",
      "C": "0.19."
    },
    "answer": "C",
    "explanation": "A. Incorrect because here the \"+1\" is replaced by \"-1\" in the correct calculation: thus calculating the threshold as 3(k - l)/n = 3(4- 1)/80 = o M125 = 0 11 B. Incorrect because here the \"+1\" is omitted in the correct calculation; thus calculating the threshold as 3(k/n) = 3(4/80) = 0 15 C. Correct because a useful rule of thumb for the leverage measure is that if an observation's leverage exceeds 3(k + 1 )/n, where k = number of independent variables and n = number of observations, then it is a potentially influential observation Here, k = 4 and n = 80. so the threshold is 3(k+ l)/n = 3(4 + 1)/80 = 01875 = 0 19"
  },
  {
    "id": 56,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "An analyst estimates a multiple linear regression model with four independent variables using a sample of 100 observations: Observation 1 (leverage = 0.03), Observation 2 (leverage = 0.25), Observation 3 (leverage = 0.18). Based on the leverage measure, which of the following would most likely be considered influential observations?",
    "options": {
      "A": "Observation 1 only.",
      "B": "Observation 2 only.",
      "C": "Observation 2 and Observation 3."
    },
    "answer": "C",
    "explanation": "A. Incorrect because the leverage measure for Observation 1 is 003: which is below the threshold of 0 15, hence it would not be considered an influential observation B. Incorrect because the leverage measure for Observation 2 is 095 and it would be considered an influential observation, however: the leverage measure for Observation 3 is 0 18, which is also above the threshold of 0 15: hence it would also be considered an influential observation. C. Correct because a useful rule of thumb for the leverage measure is that if an observation's leverage exceeds 3 x (k + l)/n, where k is the number of independent variables and n is the number of observations, i Ga 3 x (4 + 1)/100 = 0 151 then it is a potentially influential observation. Since the leverage measures for Observation 2 and Observation 3 (0 25 and 018, respectively) exceed the threshold of 0.15, these would be considered influential observations"
  },
  {
    "id": 57,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "In a regression analysis using a sample of 20 companies, the number of dummy variables needed to distinguish among four different categories of companies is:",
    "options": {
      "A": "3.",
      "B": "4.",
      "C": "19."
    },
    "answer": "A",
    "explanation": "A. Correct because; if we want to distinguish among n categories, we need n- 1 dummy variables. So, if we use dummy variables to denote companies belonging to one of four categories, we use three dummies Here n = 4, so the number of dummy variables is n- 1 = 3 B. Incorrect because \"-1\" has been omitted from the correct formula, resulting in 4 instead of 3 C. Incorrect because n is assumed to be the number of companies instead of the number of categories: resulting in 20 1=19"
  },
  {
    "id": 58,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "In a multiple linear regression, how many dummy variables would be required to distinguish among small-cap, mid-cap, and large-cap stocks?",
    "options": {
      "A": "2.",
      "B": "3.",
      "C": "4."
    },
    "answer": "A",
    "explanation": "A. Correct because, in a multiple linear regression, if we want to distinguish among n categories, we need n- 1 dummy variables So, for example, if we use dummy variables to denote companies belonging to one of five industry sectors: we use four dummies. In this case, dummy variables are used to distinguish between three categories, hence two dummy variables should be used B. Incorrect because, in this case, dummy variables are used to distinguish between three categories, hence two (not three) dummy variables should be used. The reason for using n - 1 dummy variables is to avoid violating the assumption that no exact linear relationship exists between two or more independent variables. If we included dummy variables for all n categories: rather than n - 1 the regression would fail because the dummies would sum to the variable used to estimate the intercept in the regression C. Incorrect because, in this case, dummy variables are used to distinguish between three categories, hence two (not four) dummy variables should be used"
  },
  {
    "id": 59,
    "topic": "Quantitative Methods",
    "vignette": "",
    "stem": "If the probability of an event occurring is estimated as p = 0.618 with a logistic regression, the associated log odds are closest to:",
    "options": {
      "A": "0.382.",
      "B": "0.481.",
      "C": "1.618."
    },
    "answer": "B",
    "explanation": "A. Incorrect because this is 1 - P, instead of In(P/(1 - P)); 1 -P = 1 -0 618 = 0382 B. Correct because logistic regression (logit) uses the logistic transformation of the event probability (P) into the log odds, In(P/(1 - P)): as the dependent variable Here P = 0 618; so the associated log odds should be In(P/(1 - P)) = In(0618/(1 - 0 618)) = 0 481 C. Incorrect because the natural logarithm is not taken in the correct transformation; resulting in P/(l 618"
  }
];
