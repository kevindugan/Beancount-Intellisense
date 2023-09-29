

grammar Beancount;

ledger: stat* ;

stat: option
    | include
    | account_open
    | account_close
    | transaction
    | NL
    ;

option: 'option' STRING STRING
      | DATE 'custom' STRING+ ;

include: 'include' STRING ;

account_open: DATE 'open' ACCOUNT_NAME CURRENCY? ;
account_close: DATE 'close' ACCOUNT_NAME ;

transaction: DATE STATUS STRING STRING? (TAG|REF)* NL account_update (NL account_update)+ ;

account_update: ACCOUNT_NAME (value price?)?;

price: '{' value '}' ;
value: FLOAT CURRENCY ;

NL: '\r'? '\n' ;
STRING: '"' ~["]* '"' ;
DATE: [0-9][0-9][0-9][0-9]'-'[0-9][0-9]'-'[0-9][0-9] ;
ACCOUNT_NAME: ('Assets'|'Liabilities'|'Income'|'Expenses'|'Equity')':'[a-zA-Z0-9:\-]+ ;
CURRENCY: [A-Z][A-Z][A-Z]+ ;
STATUS: '*'|'!' ;
FLOAT: ('-')?[0-9,]+(.[0-9]+)? ;
TAG: '^'[a-zA-Z0-9\-_]+ ;
REF: '#'[a-zA-Z0-9\-_]+ ;

WS: [ \t]+ -> skip ;
COMMENT: ';' ~[\r\n]* NL -> skip ;