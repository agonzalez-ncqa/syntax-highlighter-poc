/* eslint-disable @typescript-eslint/no-explicit-any */
/*
Language: Clinical Quality Language (CQL)
Description: A domain-specific language for clinical decision support.
Category: healthcare, scripting
*/

export const cqlSyntaxDef = (hljs: any) => {
  const KEYWORDS = [
    "define", "define function", "parameter", "public", "private", "library", "using",
    "include", "codesystem", "valueset", "code", "concept", "context", "if", "then", "else",
    "case", "when", "not", "exists", "null", "true", "false", "is", "as", "cast", "between",
    "or", "and", "xor", "implies", "let", "return", "from", "where", "aggregate", "sort",
    "by", "asc", "desc", "collapse", "expand", "per", "Interval", "Tuple"
  ];

  const LITERALS = ["true", "false", "null"];

  const BUILT_INS = [
    "Today", "Now", "TimeOfDay", "DateTime", "Interval", "Tuple", "Choice",
    "Integer", "Decimal", "String", "Boolean", "Quantity", "Ratio"
  ];

  return {
    name: "CQL",
    keywords: {
      keyword: KEYWORDS,
      literal: LITERALS,
      built_in: BUILT_INS
    },
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.NUMBER_MODE,
      {
        className: "type",
        match: /\b(Code|Concept|date|time|Interval|Tuple)\b/
      },
      {
        className: "operator",
        match: /\b(and|or|not|implies|contains|in|between|=|!=|<|>|<=|>=|~|!~)\b/
      },
      {
        className: "function",
        match: /\b(aggregate|collapse|convert|define|exists|expand|flatten|function|included in|meets|overlaps|return|sort|such that|width)\b/
      }
    ]
  };
}
