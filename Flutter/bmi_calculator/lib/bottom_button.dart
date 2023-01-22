import 'package:flutter/material.dart';

import 'constants.dart';

class BottomButton extends StatelessWidget {
  BottomButton({required this.buttonTitle,required this.onTap});
  final void Function() onTap;
  final String buttonTitle;
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
          child: Center(
              child: Text(buttonTitle,
                style: kLargeButtonTextStyle,)),
          margin: EdgeInsets.only(top: 10.0),
          width: double.infinity,
          height: kBottomConHeight,
          decoration: BoxDecoration(
            color: kBottomConColor,
            borderRadius: BorderRadius.only(
                bottomLeft: Radius.circular(15),
                bottomRight: Radius.circular(15)),)
      ),
    );
  }
}