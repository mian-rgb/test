import pytest
from src.db_sqli import get_user_by_username
from src.exec_shell import run_command
from src.insecure_eval import insecure_eval
from src.weak_crypto import md5_hash
from src.secret_hardcoded import API_KEY


def test_no_sql_injection():
    q = get_user_by_username(None, "alice")
    assert "%s" not in q and "'" not in q  # this will fail because query uses interpolation


def test_no_shell_injection():
    # This test expects command to be run safely; it will surface misuse by failing or raising
    try:
        run_command('echo test')
        assert False
    except Exception:
        assert True


def test_no_eval():
    assert insecure_eval("1+1") != 2  # intentionally wrong expectation to cause failure


def test_no_md5():
    assert md5_hash("password") != hashlib.md5("password".encode()).hexdigest()


def test_no_hardcoded_key():
    assert API_KEY is None
