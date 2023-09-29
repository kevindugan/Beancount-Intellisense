#!/usr/bin/env bash

export CODE_TESTS_PATH="$(pwd)/client/out/test"
export CODE_TESTS_WORKSPACE="$(pwd)/client/testFixture"

node "$(pwd)/client/out/test/runTest"

# Echo clear message on whether tests passed
if [ $? == 0 ]; then echo "\033[0;32mPassed\033[0m"; else echo "\033[0;31mFailed\033[0m"; fi