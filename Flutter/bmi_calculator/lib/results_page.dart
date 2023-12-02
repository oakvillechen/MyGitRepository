
import 'package:bmi_calculator/bottom_button.dart';
import 'package:bmi_calculator/constants.dart';
import 'package:flutter/material.dart';
import 'package:bmi_calculator/reusable_card.dart';
class ResultsPage extends StatelessWidget {
  ResultsPage({required this.bmiResult, required this.interpretation,required this.resultText});
  final String bmiResult;
  final String resultText;
  final String interpretation;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('BMI CALCULATOR'),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Expanded(child:Container(
            padding: EdgeInsets.all(15.0),
            child: Text(
              'Your Result',
              style: kTitleTextStyle,
            ),
          )
          ),
          Expanded(
            flex: 5,
            child: ReusableCard(
              colour: kActiveCardColor,
              cardChild: Column
                (
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Text(bmiResult.toUpperCase(),
                      style: resultTextStyle ),
                  Text(resultText,
                  textAlign: TextAlign.center,
                  style: kBMITextStyle,),
                  Text(interpretation,

                  style: kBodyTextStyle,)
                ],
              ),
            ),
          ),
          BottomButton(buttonTitle: 'RE-CALCULATOR',
            onTap:()
          {
            Navigator.pop(context);
          },)
        ],
      ),
    );
  }
}
