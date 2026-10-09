#!/usr/bin/env python3
"""Regression tests for the Markdown relative-link checker."""
import tempfile
import unittest
from pathlib import Path

from check_local_links import check


class LocalLinkAuditTests(unittest.TestCase):
    def test_valid_missing_external_and_fenced_examples(self):
        with tempfile.TemporaryDirectory() as td:
            root = Path(td)
            (root / "docs").mkdir()
            (root / "docs" / "target.md").write_text("# exists\n", encoding="utf-8")
            (root / "docs" / "index.md").write_text(
                "[good](target.md)\n"
                "[good fragment](target.md#part)\n"
                "[external](https://example.org/missing)\n"
                "[missing](missing.md)\n"
                "```md\n"
                "[example](fake.md)\n"
                "```\n"
                "[reference]: target.md\n",
                encoding="utf-8",
            )
            count, issues = check(root)
            self.assertEqual(count, 4)
            self.assertEqual(len(issues), 1)
            self.assertEqual(issues[0][2], "missing.md")

    def test_parent_and_reference_definition(self):
        with tempfile.TemporaryDirectory() as td:
            root = Path(td)
            (root / "docs").mkdir()
            (root / "overview.md").write_text("ok\n", encoding="utf-8")
            (root / "docs" / "index.md").write_text(
                "[overview]: ../overview.md\n"
                '[html](../overview.md)\n'
                '[missing]: ../absent.md\n',
                encoding="utf-8",
            )
            count, issues = check(root)
            self.assertEqual(count, 3)
            self.assertEqual([i[2] for i in issues], ["../absent.md"])


if __name__ == "__main__":
    unittest.main()
