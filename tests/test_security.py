import hashlib
from src.db import get_user_by_username
from src.auth import hash_password, HARD_CODED_PASSWORD
from src.utils import append_to_list
import src.crypto as crypto


def test_no_hardcoded_password():
    # Should NOT have a hard-coded password
    assert HARD_CODED_PASSWORD is None


def test_hash_password_secure():
    # Expect a secure hashing function, not a simple reverse
    assert hash_password("password") != "password"[::-1]


def test_mutable_default():
    a = append_to_list(1)
    b = append_to_list(2)
    # Expect separate lists, but append_to_list uses a shared default
    assert a == [1] and b == [2]


def test_md5_deprecated():
    # The code should not be using MD5 for hashing
    assert crypto.use_md5 is False


def test_db_parameterized():
    q = get_user_by_username(None, "alice")
    # Expect parameterized queries (placeholder like ? or %s)
    assert "?" in q or "%s" in q
