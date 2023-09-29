FROM python:3.10-slim-bookworm

# RUN apt update && \
#     apt install -y npm default-jdk default-jre && \
# 	pip install -U pip && \
# 	pip install antlr4-tools && \
# 	npm install -g ts-node

RUN apt update && \
    pip install -U pip && \
	pip install antlr4-python3-runtime && \
    apt install -y npm default-jdk default-jre curl && \
	npm install -g ts-node && \
	cd /usr/local/lib && \
	curl -LO http://www.antlr.org/download/antlr-4.13.1-complete.jar && \
	echo "alias antlr4='java org.antlr.v4.Tool'" >> ${HOME}/.bashrc && \
	echo "alias grun='java org.antlr.v4.gui.TestRig'" >> ${HOME}/.bashrc && \
	echo "export CLASSPATH=.:/usr/local/lib/antlr-4.13.1-complete.jar" >> ${HOME}/.bashrc

ENTRYPOINT [ "/bin/bash" ]
# pygrun Expr prog --tree t.expr
# antlr4 -Dlanguage=TypeScript -visitor Beancount.g4 && ts-node test_parser.ts
# antlr4 -Dlanguage=Python3 Beancount.g4 && pygrun --tree Beancount ledger test.bean