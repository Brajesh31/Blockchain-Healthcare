#!/usr/bin/env python3
"""Parse all documentation SVG illustrations as XML."""

from pathlib import Path
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
ASSETS = sorted(ROOT.glob("docs/assets/*.svg"))


def main() -> int:
    errors = []
    for path in ASSETS:
        try:
            ET.parse(path)
        except ET.ParseError as exc:
            errors.append(f"{path.relative_to(ROOT)}: {exc}")
    if errors:
        print("\n".join(errors))
        return 1
    print(f"Validated {len(ASSETS)} SVG files.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
