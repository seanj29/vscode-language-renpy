/* eslint-disable @typescript-eslint/no-non-null-assertion */

// THIS FILE HAS BEEN GENERATED BY THE `syntax-to-token-pattern.py` GENERATOR
// DO NOT EDIT THIS FILE DIRECTLY! INSTEAD RUN THE PYTHON SCRIPT.
// ANY MANUAL EDITS MADE TO THIS FILE WILL BE OVERWRITTEN. YOU HAVE BEEN WARNED.
// Last generated: 14/06/2023 16:51:20 (UTC+0)

import * as PythonPatterns from "./python-token-patterns.g";
import * as ScreenPatterns from "./screen-token-patterns.g";
import * as AtlPatterns from "./atl-token-patterns.g";
import * as RenpyPatterns from "./renpy-token-patterns.g";

// Push all RenpyPatterns external includes
RenpyPatterns.literal.patterns!.push(PythonPatterns.literal);
RenpyPatterns.parenthesisedPython.patterns![0].patterns!.push(PythonPatterns.expression);
RenpyPatterns.parenthesisedPython.patterns![1].patterns!.push(PythonPatterns.expression);
RenpyPatterns.parenthesisedPython.patterns![2].patterns!.push(PythonPatterns.expression);
RenpyPatterns.simpleExpression.patterns!.splice(0, 0, PythonPatterns.string);
RenpyPatterns.simpleExpression.patterns!.splice(3, 0, PythonPatterns.memberAccess);
RenpyPatterns.simpleExpression.patterns!.splice(4, 0, PythonPatterns.functionCall);
RenpyPatterns.keywords.patterns![1].patterns!.push(PythonPatterns.expression);
RenpyPatterns.constantPlaceholder.captures![2].patterns!.push(PythonPatterns.expression);
RenpyPatterns.pythonStatements.patterns![1].patterns!.push(PythonPatterns.python);
RenpyPatterns.define.patterns!.splice(3, 0, PythonPatterns.expression);
RenpyPatterns.defaultStatement.patterns!.splice(2, 0, PythonPatterns.expression);
RenpyPatterns.oneLinePython.patterns!.splice(2, 0, PythonPatterns.expression);
RenpyPatterns.sayStatements.patterns![0].endCaptures![3].patterns!.push(PythonPatterns.functionArguments);
RenpyPatterns.sayStatements.patterns![1].endCaptures![3].patterns!.push(PythonPatterns.functionArguments);
RenpyPatterns.image.patterns![0].patterns!.push(AtlPatterns.atl);
RenpyPatterns.show.patterns![0].patterns!.push(AtlPatterns.atl);
RenpyPatterns.scene.patterns![0].patterns!.push(AtlPatterns.atl);
RenpyPatterns.camera.patterns![0].patterns!.push(AtlPatterns.atl);
RenpyPatterns.labelName.patterns!.splice(0, 0, PythonPatterns.builtinPossibleCallables);
RenpyPatterns.labelCall.patterns!.splice(0, 0, PythonPatterns.specialVariables);
RenpyPatterns.labelCall.patterns!.push(PythonPatterns.functionArguments);
RenpyPatterns.labelDefName.patterns!.splice(0, 0, PythonPatterns.builtinPossibleCallables);
RenpyPatterns.label.captures![2].patterns!.splice(1, 0, PythonPatterns.parameters);
RenpyPatterns.returnStatements.patterns!.push(PythonPatterns.expression);
RenpyPatterns.callJumpExpression.patterns!.push(PythonPatterns.expression);
RenpyPatterns.callPass.patterns!.push(PythonPatterns.functionArguments);
RenpyPatterns.menuOption.beginCaptures![3].patterns!.splice(0, 0, PythonPatterns.functionArguments);
RenpyPatterns.menuOption.beginCaptures![3].patterns![1].captures![2].patterns!.push(PythonPatterns.expressionBare);
RenpyPatterns.menuSet.captures![2].patterns!.push(PythonPatterns.expressionBare);
RenpyPatterns.menu.beginCaptures![3].patterns!.push(PythonPatterns.functionArguments);
RenpyPatterns.audioParams.patterns!.push(PythonPatterns.number);
RenpyPatterns.play.patterns![0].patterns!.push(PythonPatterns.expression);
RenpyPatterns.queue.patterns![0].patterns!.push(PythonPatterns.expression);
RenpyPatterns.stop.patterns![0].patterns!.push(PythonPatterns.number);
RenpyPatterns.renpyStatements.patterns!.splice(6, 0, AtlPatterns.transform);
RenpyPatterns.renpyStatements.patterns!.splice(12, 0, ScreenPatterns.screen);

// Push all AtlPatterns external includes
AtlPatterns.atl.patterns!.splice(0, 0, RenpyPatterns.conditionals);
AtlPatterns.atlSimpleExpression.patterns!.splice(0, 0, RenpyPatterns.renpyOnlyExpressions);
AtlPatterns.atlSimpleExpression.patterns!.splice(2, 0, PythonPatterns.memberAccess);
AtlPatterns.atlSimpleExpression.patterns!.splice(3, 0, PythonPatterns.illegalOperator);
AtlPatterns.atlSimpleExpression.patterns!.splice(4, 0, PythonPatterns.operator);
AtlPatterns.atlSimpleExpression.patterns!.splice(5, 0, PythonPatterns.curlyBraces);
AtlPatterns.atlSimpleExpression.patterns!.splice(6, 0, PythonPatterns.itemAccess);
AtlPatterns.atlSimpleExpression.patterns!.splice(7, 0, PythonPatterns.list);
AtlPatterns.atlSimpleExpression.patterns!.splice(8, 0, PythonPatterns.oddFunctionCall);
AtlPatterns.atlSimpleExpression.patterns!.splice(9, 0, PythonPatterns.roundBraces);
AtlPatterns.atlSimpleExpression.patterns!.splice(10, 0, PythonPatterns.functionCall);
AtlPatterns.atlSimpleExpression.patterns!.splice(11, 0, PythonPatterns.builtinFunctions);
AtlPatterns.atlSimpleExpression.patterns!.splice(12, 0, PythonPatterns.builtinTypes);
AtlPatterns.atlSimpleExpression.patterns!.splice(13, 0, PythonPatterns.builtinExceptions);
AtlPatterns.atlSimpleExpression.patterns!.splice(14, 0, PythonPatterns.magicNames);
AtlPatterns.atlSimpleExpression.patterns!.splice(15, 0, PythonPatterns.specialNames);
AtlPatterns.atlSimpleExpression.patterns!.splice(16, 0, PythonPatterns.illegalNames);
AtlPatterns.atlSimpleExpression.patterns!.splice(17, 0, PythonPatterns.specialVariables);
AtlPatterns.atlSimpleExpression.patterns!.splice(18, 0, PythonPatterns.ellipsis);
AtlPatterns.atlSimpleExpression.patterns!.splice(19, 0, PythonPatterns.punctuation);
AtlPatterns.atlSimpleExpression.patterns!.splice(20, 0, PythonPatterns.lineContinuation);
AtlPatterns.atlSimpleExpression.patterns!.push(RenpyPatterns.whitespace);
AtlPatterns.atlExpression.patterns!.push(PythonPatterns.expression);
AtlPatterns.atlKeywords.patterns!.push(RenpyPatterns.keywords);
AtlPatterns.atlEventName.patterns!.splice(0, 0, PythonPatterns.builtinPossibleCallables);
AtlPatterns.atlEventDefName.patterns!.splice(0, 0, PythonPatterns.builtinPossibleCallables);
AtlPatterns.atlOn.beginCaptures![3].patterns!.push(RenpyPatterns.comments);
AtlPatterns.atlFunction.captures![2].patterns!.splice(0, 0, PythonPatterns.builtinPossibleCallables);
AtlPatterns.atlWarperName.patterns!.splice(0, 0, PythonPatterns.builtinPossibleCallables);
AtlPatterns.atlFallback.patterns!.push(RenpyPatterns.basePatterns);

// Push all ScreenPatterns external includes
ScreenPatterns.screenDefName.patterns!.splice(0, 0, PythonPatterns.builtinPossibleCallables);
ScreenPatterns.screenSimpleExpression.patterns!.splice(0, 0, RenpyPatterns.renpyOnlyExpressions);
ScreenPatterns.screenSimpleExpression.patterns!.push(PythonPatterns.memberAccess, PythonPatterns.illegalOperator, PythonPatterns.operator, PythonPatterns.curlyBraces, PythonPatterns.itemAccess, PythonPatterns.list, PythonPatterns.oddFunctionCall, PythonPatterns.roundBraces, PythonPatterns.functionCall, PythonPatterns.builtinFunctions, PythonPatterns.builtinTypes, PythonPatterns.builtinExceptions, PythonPatterns.magicNames, PythonPatterns.specialNames, PythonPatterns.illegalNames, PythonPatterns.specialVariables, PythonPatterns.ellipsis, PythonPatterns.punctuation, PythonPatterns.lineContinuation);
ScreenPatterns.screenText.patterns!.push(RenpyPatterns.atStatement);
ScreenPatterns.screenText.patterns![0].patterns!.push(AtlPatterns.atl);
ScreenPatterns.screenText.patterns![1].patterns!.splice(0, 0, RenpyPatterns.strings);
ScreenPatterns.screen.patterns![0].beginCaptures![3].patterns!.push(PythonPatterns.parameters, RenpyPatterns.invalidToken);
ScreenPatterns.screenFallback.patterns!.push(RenpyPatterns.basePatterns);
ScreenPatterns.screenLanguage.patterns!.splice(0, 0, RenpyPatterns.conditionals);

// Push all PythonPatterns external includes
PythonPatterns.stringUnicodeGuts.patterns!.splice(0, 0, RenpyPatterns.stringsInterior);


export { PythonPatterns, ScreenPatterns, AtlPatterns, RenpyPatterns };