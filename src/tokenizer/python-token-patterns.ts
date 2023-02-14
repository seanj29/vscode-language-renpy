/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-useless-backreference */
import { charactersPatten, strings } from "./common-token-patterns";
import { MetaTokenType } from "./renpy-tokens";
import { TokenPattern, TokenRepoPattern } from "./token-pattern-types";

export const pythonMemberAccess: TokenPattern = {
    patterns: [charactersPatten],
};

export const pythonExpressionBare: TokenPattern = {
    patterns: [charactersPatten],
};
export const pythonExpressionBase: TokenPattern = {
    patterns: [strings],
};
export const pythonExpression: TokenPattern = {
    // All valid Python expressions
    patterns: [pythonExpressionBase, pythonMemberAccess, charactersPatten],
};

export const semicolon: TokenPattern = {
    patterns: [
        {
            token: MetaTokenType.Invalid,
            match: /\\;$/g,
        },
    ],
};

export const pythonLiteral: TokenPattern = {
    patterns: [charactersPatten],
};
export const pythonIllegalOperator: TokenPattern = {
    patterns: [charactersPatten],
};
export const pythonOperator: TokenPattern = {
    patterns: [charactersPatten],
};
export const pythonCurlyBraces: TokenPattern = {
    patterns: [charactersPatten],
};
export const pythonItemAccess: TokenPattern = {
    patterns: [charactersPatten],
};
export const pythonList: TokenPattern = {
    patterns: [charactersPatten],
};
export const pythonOddFunctionCall: TokenPattern = {
    patterns: [charactersPatten],
};
export const pythonRoundBraces: TokenPattern = {
    patterns: [charactersPatten],
};
export const pythonFunctionCall: TokenPattern = {
    patterns: [charactersPatten],
};
export const pythonBuiltinFunctions: TokenPattern = {
    patterns: [charactersPatten],
};
export const pythonBuiltinTypes: TokenPattern = {
    patterns: [charactersPatten],
};
export const pythonBuiltinExceptions: TokenPattern = {
    patterns: [charactersPatten],
};
export const pythonMagicNames: TokenPattern = {
    patterns: [charactersPatten],
};
export const pythonSpecialNames: TokenPattern = {
    patterns: [charactersPatten],
};
export const pythonIllegalNames: TokenPattern = {
    patterns: [charactersPatten],
};
export const pythonSpecialVariables: TokenPattern = {
    patterns: [charactersPatten],
};
export const pythonEllipsis: TokenPattern = {
    patterns: [charactersPatten],
};
export const pythonPunctuation: TokenPattern = {
    patterns: [charactersPatten],
};
export const pythonLineContinuation: TokenPattern = {
    patterns: [charactersPatten],
};
export const pythonBuiltinPossibleCallables: TokenPattern = {
    patterns: [charactersPatten],
};
export const pythonFunctionArguments: TokenPattern = {
    patterns: [charactersPatten],
};
export const pythonNumber: TokenPattern = {
    patterns: [charactersPatten],
};

export const pythonPatterns: TokenRepoPattern = {
    patterns: [],
};