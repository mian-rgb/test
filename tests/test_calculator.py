import pytest
from src.calculator import divide, insecure_eval


def test_divide():
    # Will fail because divide returns a string '2' not int 2
    assert divide(4, 2) == 2


def test_divide_by_zero():
    # Expect a ZeroDivisionError, but function returns a string.
    with pytest.raises(ZeroDivisionError):
        divide(1, 0)


def test_insecure_eval():
    # This will succeed but demonstrates insecure behavior in code.
    # It also exercises the insecure_eval function for review tools.
    res = insecure_eval("__import__('os').getcwd()")
    assert res is not None
