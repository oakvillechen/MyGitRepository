import 'dart:math';

import 'package:flutter/material.dart';
class CalculatorBrain
{
  CalculatorBrain({required this.weight,required this.height});

  final int height;
  final int weight;
  double _bmi =0;
  String calculateBMI()
  {
     _bmi = weight / pow(height/100,2);
    return _bmi.toStringAsFixed(1);
  }

  String getResult()
  {
      if(_bmi >=25)
        {
          return 'Over Weight!!!';
        }
      else if (_bmi > 18.5)
        {
          return 'Normal';
        }
      else
        {
          return 'Under Weight!';
        }
  }

  String getInterpretation()
  {
    if(_bmi >=25)
    {
      return 'Try to do some exercised!';
    }
    else if (_bmi > 18.5)
    {
      return 'Normal, keep it well';
    }
    else
    {
      return 'Under Weight! you have to eat more meat!';
    }
  }

}